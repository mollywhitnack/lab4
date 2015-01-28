exports.viewProject = function(req, res){
	// code here
	var name = req.params.name;
	console.log("The Project name is: " + name);
	res.render('project', {'projectName': name} );
}