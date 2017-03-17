<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../app/vendor/autoload.php';
require '../app/class/FileHandler.php';
require '../app/class/CustomErrorHandler.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

$container = $app->getContainer();
$container['errorHandler'] = function ($c) {
	return new CustomErrorHandler();
};


$app->get("/", function(Request $request, Response $response) {
    $file = '../app_client/templates/index.html';
    return $response->write(file_get_contents($file));
});


$app->get('/subject-data/{id}', function (Request $request, Response $response) {
    $id = $request->getAttribute('id');
    
    $fh = new FileHandler();
    $data = $fh->getSubjectData(file_get_contents("../app/data/subject-data.csv"),$id);

    if(is_null($data)){
        throw new \Slim\Exception\NotFoundException($request, $response);
    }
    else{
        $response->withStatus(200);
        $response->write(json_encode($data, JSON_PRETTY_PRINT));
    }
    return $response->withHeader('Content-type', 'application/json; charset=utf-8');
});



$app->run();