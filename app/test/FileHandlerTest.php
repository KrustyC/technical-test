<?php  

use PHPUnit\Framework;

require __DIR__.'/../class/FileHandler.php';

class FileHandlerTest extends PHPUnit_Framework_TestCase
{

	/**
	  * @dataProvider dataProvider
	  */
	public function testGetSubjectData($id,$expected){
		$fh = new FileHandler();
    	$data = $fh->getSubjectData(file_get_contents(__DIR__."/../data/subject-data.csv"),$id);

    	$this->assertEquals($data,$expected);
	}

	public function dataProvider(){

		$readingData = array(
			"subjectId"=>1,
			"content"=>array(
				array("id"=>1,"name"=>"Reading Content 1"),
				array("id"=>2,"name"=>"Reading Content 2"),
				array("id"=>3,"name"=>"Reading Content 3")
			)
		);

		$writingData = array(
			"subjectId"=>2,
			"content"=>array(
				array("id"=>4,"name"=>"Writing Content 1"),
				array("id"=>5,"name"=>"Writing Content 2")
			)
		);

		$mathsData = array(
			"subjectId"=>3,
			"content"=>array(
				array("id"=>6,"name"=>"Maths Content 1"),
				array("id"=>7,"name"=>"Maths Content 2"),
				array("id"=>8,"name"=>"Maths Content 3"),
				array("id"=>9,"name"=>"Maths Content 4")
			)
		);

		return array(
			array(1,$readingData),
			array(2,$writingData),
			array(3,$mathsData)
		);

	}
}

?>
