<?php 
class CustomErrorHandler{

	public function __invoke($request, $response, $args) {
        return $response
            ->withStatus(404)
            ->withHeader('Content-Type', 'text/html')
            ->write('An error has been occured!');
   }
}

?>