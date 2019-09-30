var dq_mid=1;
function dq_linkForms(){
	jQuery(".contactform:not(.processed):not(.modalform)").each(function() {
        jQuery(this).addClass("processed");

        jQuery(this).find("select").each(function() {
            jQuery(this).selectBoxIt({
                showFirstOption: false,
                autoWidth: false
            });
        });

		jQuery(this).validate({
			ignore: [], 
			errorPlacement: function(error, element) {
			    if (element.attr("type") == "checkbox" )
			    {
			        error.insertBefore(element);
			        jQuery(element).closest('.form-group').addClass("checkbox-error");
			    }
			    else
			    {
			        error.insertAfter(element);
			    }
			},
			rules: {
			    PhoneNumber_countrycode: {
					number: true,
					minlength: 9,
					maxlength: 15
			    }
			 }
        });
	});
}

function dq_initHistory(){
	dq_initAnimation();
}

function dq_linkModals(_this) {
	dq_mid++;
	var modal = jQuery(_this.target).closest("section").find(".sectionmodal .modal").clone();
	var modalid = "modal_"+dq_mid
	modal.attr("id", modalid);
	jQuery("body").append(modal);

	newmodal = jQuery("#"+modalid);

	newmodal.on('show.bs.modal', function (e) {
	    jQuery('body').addClass("blue-modal");
	}).on('hide.bs.modal', function (e) {
		jQuery('body').removeClass("blue-modal");
		jQuery(e.currentTarget).remove();
	})

	dq_beautifyform(newmodal, dq_mid);
	newmodal.modal("show");
}

function dq_linkDemoModals(_this) {
	dq_mid++;
	var modal = jQuery(_this.target).closest("section").find(".demomodal .modal").clone();
	var modalid = "modal_"+dq_mid
	modal.attr("id", modalid);
	jQuery("body").append(modal);

	newmodal = jQuery("#"+modalid);

	newmodal.on('show.bs.modal', function (e) {
	    jQuery('body').addClass("blue-modal");
	}).on('hide.bs.modal', function (e) {
		jQuery('body').removeClass("blue-modal");
		jQuery(e.currentTarget).remove();
	})

	dq_beautifyform(newmodal, dq_mid);
	newmodal.modal("show");
}

function dq_beautifyform(_this, idx){

	_this.find("label").each(function(){
		jQuery(this).attr("for", jQuery(this).attr("for")+idx);
	});
	_this.find("input").each(function(){
		jQuery(this).attr("id", jQuery(this).attr("id")+idx);
	});
	
	_this.find("select:not('.processed')").each(function() {
		jQuery(this).selectBoxIt({
			showFirstOption: false,
			autoWidth: false
		});
	});
	_this.find('form').validate({
		ignore: [], 
		errorPlacement: function(error, element) {
			if (element.attr("type") == "checkbox" )
			{
				error.insertBefore(element);
				jQuery(element).closest('.form-group').addClass("checkbox-error");
			}
			else
			{
				error.insertAfter(element);
			}
		},
		rules: {
			PhoneNumber_countrycode: {
				number: true,
				minlength: 9,
				maxlength: 15
			}
		 }
	});
}

function dq_initHowItWorks(){
	jQuery("#step0").connections({
		to: "#step1", 'class': 'hiddenItem',
	});
	jQuery("#step1").connections({
		to: "#step2", 'class': 'rightdirection hiddenItem',
	});
	jQuery("#step2").connections({
		to: "#step3", 'class': 'straight hiddenItem',
	});
	jQuery("#step3").connections({
		to: '.item4 .fakespot', 'class': 'doublestep hiddenItem',
	});
	jQuery("#step3").connections({
		to: '.item5 .fakespot', 'class': 'doublestep hiddenItem',
	});
	jQuery("#step4a").connections({
		to: ".item6 .fakespot", 'class': 'hiddenItem',
	});
	jQuery("#step4b").connections({
		to: ".item6 .fakespot", 'class': 'hiddenItem',
	});
	
	var connections = jQuery("connection");
	setInterval(function() {
		connections.connections("update");
	}, 100);

	dq_initAnimation();
}

function dq_initAnimation() {
	var animateHTML = function() {
		var elems;
		var windowHeight;
		function init() {
			elems = document.querySelectorAll('.hiddenItem');
			windowHeight = window.innerHeight;
			addEventHandlers();
			checkPosition();
		}
		function addEventHandlers() {
			window.addEventListener('scroll', checkPosition);
			window.addEventListener('resize', init);
		}
		function checkPosition() {
			for (var i = 0; i < elems.length; i++) {
				var positionFromTop = elems[i].getBoundingClientRect().top;
				if (positionFromTop - windowHeight <= 0) {
				elems[i].className = elems[i].className.replace(
					'hiddenItem',
					'fade-in-element'
				);
				}
			}
		}
		return {
		init: init
		};
	};
	animateHTML().init();
}

function dq_initLazyImg() {
	jQuery(".lazygif").lazyload({});
	jQuery('.nav-pills').find('a').on('shown.bs.tab', function () {
	    jQuery(".lazygif").lazyload({});
	});
}