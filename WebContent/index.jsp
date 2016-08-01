<%@ page language="java" contentType="text/html; charset=UTF8"
    pageEncoding="UTF8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF8">
		<title>File uploader</title>
		<!-- Include jQuery form & jQuery script file. -->
		<script src="js/lib/jquery.min.js" ></script>
		<script src="js/lib/jquery.form.min.js" ></script>
		<script src="js/fileUploadScript.js" ></script>
		<!-- Include css styles here -->
		<link href="css/style.css" rel="stylesheet" type="text/css" />
	</head>
	<body>
	<h3>Ajax File Upload with Progress Bar</h3>
		<form id="UploadForm" action="UploadFile" method="post" enctype="multipart/form-data">
			<input type="button" id="addfile" value="+">
			<span id="rm_btn"><input type="button" id="btn_rm_input" value="-"></span><br/>
			<input type="file" size="60" id="myfile" name="myfile"> 
			<input type="submit" value="Ajax File Upload">
			<div id="respsonse"><label>檔案大小</label><span id="filesize"></span></div>
			<span id="append_input"></span>
			  <div id="progressbox">
			    <div id="progressbar"></div>
			    <div id="percent">0%</div>
			  </div>
			<span><div id="message"></div></span>
			
		</form>
	</body>
</html>