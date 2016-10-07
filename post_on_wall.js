$(document).ready(function()
{ 
	$('#post_on_wall').click(function() 
	{
	    $('#dialog-modal').attr('title', 'ãÔÇÑßÉ ÈÇáÍÇÆØ');

		$( "#dialog:ui-dialog" ).dialog( "destroy" );

		$( "#dialog-modal" ).dialog
		({
				height:190,
				width:350,
				modal: true,
				resizable:false
		});	
	});	

	$('#head_wall_share').focus(function()
	{
	  $(this).css("height",'54');
	  $(this).css("color",'#222');
	  var traidnt_wall_mm_content_check = $(this).val();
if(traidnt_wall_mm_content_check == 'ÔÇÑßäÇ ãÇíÏæÑ ÈÐåäß ÇáÂä')
{
$(this).val('');
}
	});
	
	$('#head_wall_share_submit').click(function()
	{
		var msg = $('#head_wall_share').val();
		if(msg == '')
		{
			alert('ÚÝæÇ ãä ÝÖáß Þã ÈßÊÇÈÉ ÇáÑÓÇáÉ ÃæáÇ');
		}
		else
		{


		jQuery.ajax(
		{
			async :true,
			type :"POST",
			url :"wall.php?do=postmsg&amp;rand=" + Math.random(),
			data: "post_name=" + msg + "&amp;post_username=" + post_name + "&amp;post_id=" + post_id + "&amp;st=" + SECURITYTOKEN,

			success : function(data)
			{
				var selectedIndex = 0; 
				$('#head_wall_share').val('')
				$('#head_wall_share_submit').html('ãÔÇÑßÉ');
				$( "#dialog-modal" ).dialog( "destroy" );				
				
				if ($('#wall_redirect').attr('checked')) 
				{
				    window.location.replace("wall.php");
				}				
				
			},
			beforeSend : function(data)
			{   
				$('#head_wall_share_submit').html('íÑÌí ÇáÅäÊÙÇÑ');
			},
			error : function()
			{
					return true;
			}

			});


		}
	});	
});
