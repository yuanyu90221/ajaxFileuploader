$(document).ready(function() {
	let button_count = 1;
	var options = {
		beforeSend : function() {
			$("#progressbox").show();
			// clear everything
			$("#progressbar").width('0%');
			$("#message").empty();
			$("#percent").html("0%");
		},
		uploadProgress : function(event, position, total, percentComplete) {
			$("#progressbar").width(percentComplete + '%');
			$("#percent").html(percentComplete + '%');
	
			// change message text and % to red after 50%
			if (percentComplete > 50) {
				$("#message").html("<font color='red'>File Upload is in progress .. </font>");
			}
		},
		success : function() {
			$("#progressbar").width('100%');
			$("#percent").html('100%');
		},
		complete : function(response) {
			$("#message").html("<font color='blue'>Your file has been uploaded!</font>");
		},
		error : function() {
			$("#message").html("<font color='red'> ERROR: unable to upload files</font>");
		}
	};
	$("#UploadForm").ajaxForm(options);
	$("#myfile").on("change",function(){
		console.log('file change');
		$("#progressbar").width('0%');
		$("#message").empty();
		$("#percent").html("0%");
		if(this.files[0]){
			var fileSize = this.files[0].size /1000;
			$("#filesize").html(fileSize +"KB");
		}
		else{
			$("#filesize").html("0KB");
		}
	});
	$("#rm_btn").css("display","none");
	$("#addfile").on('click',function(){
		var result_btn_count = button_count;
		var append_btn_html ='<div id="btn_'+button_count+'">'+
							 '<input type="file" size="60" id="myfile'+button_count+'" name="myfilemyfile'+button_count+'">'+
		                     '<input type="button" value="Ajax File Upload'+button_count+'" id="submit'+button_count+'">'+
		                     '<div id="progressbox">'+
		                     '<div id="progressbar'+button_count+'"></div>'+
		     			     '<div id="percent'+button_count+'">0%</div>'+
		     			     '</div>'+
		     			     '<span><div id="message'+button_count+'"></div></span>'+
		     			     '<div id="respsonse"><label>檔案大小</label><span id="filesize'+button_count+'"></span></div>'+
		     			     '</div>';
		$("#append_input").append(append_btn_html);
		
		button_count++;
	    if(button_count > 1){
	    	$("#rm_btn").css("display","inline");
	    }
	    else{
	    	$("#rm_btn").css("display","none");
	    }
//		$("#btn_rm_"+(button_count-1)).bind('click',function(){
//			var current_btn = button_count-1;
//			console.log(current_btn);
//			$("#btn_rm_"+current_btn).unbind('click');
//			$("#btn_"+current_btn).remove();
//			button_count--;
//		});
	});
	$("#btn_rm_input").bind('click', function() {
		var current_btn = button_count - 1;
		console.log(current_btn);
		$("#btn_" + current_btn).remove();
		button_count--;
		if (button_count > 1) {
			$("#rm_btn").css("display", "inline");
		} else {
			$("#rm_btn").css("display", "none");
		}
	});
});