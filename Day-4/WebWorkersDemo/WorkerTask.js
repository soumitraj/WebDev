function doWork(){
		for(var i=0;i<100000;i++)
			for(var j=0;j<1000;j++)
				for(var k=0;k<100;k++)
				{}	
	}

self.onmessage = function(evt){
	if (evt.data === "start"){
		doWork();
		self.postMessage("completed");
	}
} 