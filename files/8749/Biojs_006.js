
Biojs.AnnotatorGreco = Biojs.AnnotatorGeneRef.extend(
/** @lends Biojs.Annotator# */
{
	constructor: function(options){
		
		if (this.opt.proxyUrl == undefined){
			this.opt.proxyUrl= '../biojs/dependencies/proxy/proxy.php';
		}
		
		if (this.opt.allowDuplicates == false){
			this.opt.optimizedVersion = false;
			this.opt.splitted = false;
		}
		
		this.resetStatus();
	},
	
	_getAnnotatorTypeLabel: function(){
		return "FNL";
	},
	
	 /** 
	    * Default options (and its values) for the Citation component. 
	    * @name Biojs.Citation-opt
	    * @type Object
	    */
	opt: {
		_startSearch : 0,
		_startSearchElaboration : 0
	},
	
	eventTypes : [
	],
	
	_postHighlightDone: function(){
		
		if (this.opt.elaborationAnnotation){ 
			var startTime = new Date().getTime();
		    this._mergeDataResult(true, true);
			var endTime = new Date().getTime();
		}
		
		if (this.opt.specificId==0){ 
			var NCBIAnnotator= new Biojs.AnnotatorNCBI({});
			NCBIAnnotator.setOptionsFromAncestor(this, Biojs.AnnotatorBase.CLASSNAME_NCBI, this._sharedData);
			NCBIAnnotator.load();
		}
		
		//jQuery.ui.jig.scan(jQuery('#'+this.opt.target)); 
	},

	_getAnnotationType: function (annotation){
		var type_ret = Biojs.AnnotatorBase.GRECO;
		return  type_ret;
	},
	
	_getAnnotationProvider: function(){
		return "Transcription factor – Target gene relations validated by NTNU/CNIO/BSC from text-mining";
	},
	
	_getAnnotationExactDetails: function (annotation){
		if (this.opt.showDetailedItems==1){ 
			return annotation.tags[0].name + '-'+annotation.tags[1].name;
		}else{
			return '';
		}
	}
	
},{
	
});