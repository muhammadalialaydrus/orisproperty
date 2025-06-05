(function($){
	if ($('#modal-filter').length > 0) {
		$('#modal-filter').on('hidden.bs.modal', function () {
			$(this).find('#form-filter')[0].reset();
		});
	}

	if ($('#modal-search').length > 0) {
		$('#modal-search').on('hidden.bs.modal', function () {
			$(this).find('#form-search-property')[0].reset();
		});
	}

	$('.datepicker-form').datepicker({
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		autoclose: true,
		disableTouchKeyboard: 'true',
		zIndexOffset: 2,
		templates: {
			leftArrow: '<i class="fa fa-angle-left"></i>',
			rightArrow: '<i class="fa fa-angle-right"></i>'
		}
    });

	var formFranchise = $( "#form-franchise" ).validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true
			},
			phone: {
				required: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement: 'div',
		errorClass: 'invalid-feedback',
		errorPlacement: function(error, element) {
			if(element.parent('.form-group').length) {
				error.insertAfter(element);
			}
			else {
				error.insertAfter(element);
			}
		},
	});

	var formFranchise = $( "#vendor-form" ).validate({
		rules: {
			date: {
				required: true
			},
			vendorName: {
				required: true
			},
			vendorAddress: {
				required: true
			},
			vendorHandphone: {
				required: true
			},
			vendorKtp: {
				required: true
			},
			vendorBirthPlace: {
				required: true
			},
			vendorBirthday: {
				required: true
			},
			mediatorName: {
				required: true
			},
			mediatorAddress: {
				required: true
			},
			mediatorHandphone: {
				required: true
			},
			mediatorKtp: {
				required: true
			},
			mediatorBirthPlace: {
				required: true
			},
			mediatorBirthday: {
				required: true
			},
			mediatorRelationship: {
				required: true
			},
			propertyAddress: {
				required: true
			},
			propertyKel: {
				required: true
			},
			propertyKec: {
				required: true
			},
			propertyKab: {
				required: true
			},
			propertyZip: {
				required: true
			},
			propertyPrice: {
				required: true
			},
			propertyPriceMin: {
				required: true
			},
			propertyPriceNett: {
				required: true
			},
			landSize: {
				required: true
			},
			surfaceArea: {
				required: true
			},
			buildingSize: {
				required: true
			},
			buildingArea: {
				required: true
			},
			buildingDirection: {
				required: true
			},
			floorNumber: {
				required: true
			},
			buildingCondition: {
				required: true
			},
			propertyType: {
				required: true
			},
			masterBedroom: {
				required: true
			},
			kidsBedroom: {
				required: true
			},
			masterBathroom: {
				required: true
			},
			kidsBathroom: {
				required: true
			},
			propertyCarport: {
				required: true
			},
			propertyGarage: {
				required: true
			},
			propertyTypeCheckbox: {
				required: true
			},
			documentCheckbox: {
				required: true
			},
			electricityFacility: {
				required: true
			},
			phoneFacility: {
				required: true
			},
			acFacility: {
				required: true
			},
			heaterFacility: {
				required: true
			},
			waterFacility: {
				required: true
			},
			furnishedFacility: {
				required: true
			},
			tvFacility: {
				required: true
			},
			poolFacility: {
				required: true
			},
			descriptionLocationProperty: {
				required: true
			},
			tncOption: {
				required: true
			},
		},
		messages: {
			tncOption: {
				required: "Please select one of the option"
			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement: 'div',
		errorClass: 'invalid-feedback',
		errorPlacement: function(error, element) {
			if(element.parent('.form-group').length) {
				error.insertAfter(element);
			} else if (element.parent('.jcf-checkbox').length) {
				error.insertAfter(element.parent('.jcf-checkbox').parent('.form-check').parent('.row'));
			} else if (element.parent('.jcf-radio').length) {
				error.insertAfter(element.parent('.jcf-radio').parent('.form-check').parent('.row'));
			} else if (element.parent('.jcf-select').length) {
				error.insertAfter(element.parent('.jcf-select'));
			} else {
				error.insertAfter(element);
			}
		},
	});

})(jQuery);