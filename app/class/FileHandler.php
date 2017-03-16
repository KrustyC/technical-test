<?php

class FileHandler{
	public function getSubjectData($csv,$id){
		if($csv === FALSE) { 
            throw new Exception('Unable to open the file');
        }

        $rows = array_map('str_getcsv', explode("\n", $csv));
        //array_shift($rows);
        $content = array();
        foreach ($rows as $row) {
          	//$row[0] is the Id of the subject 
	        if($row != array(null) and intval($row[0]) == intval($id)){
	        	array_push($content, array("id"=>intval($row[1]),"name"=>$row[2]));
          	}
        }

        if(count($content) > 0){
            return array("subjectId"=>intval($id),"content"=>$content);
        }
	}	
}

?>