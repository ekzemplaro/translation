// -----------------------------------------------------------------------
//	translation.js
//
//					Feb/05/2016
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	var language = "nihongo";

	show_contents (language);

	jQuery ("button").click (function ()
	{
	language = this.id;

	jQuery ("button.lang").css ("color","black");
	jQuery ("button#" + this.id).css ("color","blue");

	show_contents (language);
	});
});

// -----------------------------------------------------------------------
function show_contents (language)
{
	var url_txt = "data/" + language + ".txt";

	jQuery.get (url_txt,function (data_text)
                {
		jQuery("#contents").html (data_text);
                });
}

// -----------------------------------------------------------------------
