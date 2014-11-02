function NotesCtrl($scope){
    	$scope.title="How did you feel today?";

    	$scope.notes=[];

    	$scope.insert=function(note) {
    		var n = angular.copy(note);
    		n.createdAt = new Date()
    		$scope.notes.push(n);
    		note.content = "";

    	}
    }