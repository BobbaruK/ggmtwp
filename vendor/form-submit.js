// add error messages
var successValidationMessage =
  "Thank you for yur message! We will get back to you asa soon as possible.";
var errValidationMsg =
  "An error occurred. Please refresh the page and try again.";
var emailinvaliderrors = "Invalid Email";
var phoneinvaliderrors = "Invalid Phone number";
var onlyDigitsErrors = "Only digits allowed";
var requiredfielderrors = "This field is required";
var minlengtherrors = "At least {0} characters required!";
const libphonenumber = window.libphonenumber;
let currentip = "";
let currentcountrycode = "";
let currentcountryname = "";
let apiToken = JSON.stringify({
  Token: "A4guA05GWh-EWIDU2qQUy-WMkBcPRdjA-kTPxsw20Lu",
});
function GetLocation() {
  $.ajax({
    method: "POST",
    url: "https://ggmt-safebarrier.com/services/api/",
    contentType: "application/json",
    data: apiToken,
    dataType: "json",
  })
    .done(function (data) {
      if (data.message) {
        //Calling to IP-API
        if ($("#country").val() == "") {
          $.getJSON("https://ipapi.co/json/", function (data) {
            // Formlanguage = data.country.toLowerCase();

            let options = $("#country option");

            $.each(options, (index, value) => {
              if ($(value).attr("data-country") == data.country) {
                // set as selected
                $(value).attr("selected", "selected");
                // add to prefix field
                $(".phone-prefix").val("+" + $(value).attr("value"));
              }
            });
            watchOptions();
          });
        } else {
          countrycodeval = $("#country").val();
          $(".phone-prefix").val("+" + countrycodeval);
          watchOptions();
        }
        startValidation();
      } else {
        //store result from fxoro service IP
        currentip = data.IpAddress;
        currentcountryname = data.name;
        currentcountrycode = data.isoCode;
        // Formlanguage  = data.IsoCode.toLowerCase();
        mycountrycode = currentcountrycode;
        mycountryname = currentcountryname;
        ipcountry = data.name;

        // console.log(Formlanguage);

        // set option as selected
        if ($("#country").val() == "") {
          let options = $("#country option");

          $.each(options, (index, value) => {
            if ($(value).attr("data-country") == currentcountrycode) {
              // set as selected
              $(value).attr("selected", "selected");
              // add to prefix field
              $(".phone-prefix").val("+" + $(value).attr("value"));
            }
          });
          watchOptions();
        } else {
          countrycodeval = $("#country").val();
          $(".phone-prefix").val("+" + countrycodeval);
          watchOptions();
        }
        startValidation();
      }
    })
    .fail(function (errMsg) {
      //Calling to IP-API
      if ($("#country").val() == "") {
        $.getJSON("https://ipapi.co/json/", function (data) {
          let options = $("#country option");

          // Formlanguage = data.country.toLowerCase();

          $.each(options, (index, value) => {
            if ($(value).attr("data-country") == data.country) {
              // set as selected
              $(value).attr("selected", "selected");
              // add to prefix field
              $(".phone-prefix").val("+" + $(value).attr("value"));
            }
          });
          watchOptions();
          startValidation();
        });
      } else {
        countrycodeval = $("#country").val();
        $(".phone-prefix").val("+" + countrycodeval);
        watchOptions();
        startValidation();
      }
    });
}
function startValidation() {
  $("#contact_form").validate({
    // activate validation on key up
    onkeyup: function (element) {
      if ($(element).valid()) {
        $(element)
          .closest(".form-group")
          .find(".isValid")
          .css("display", "block");
        $(element)
          .closest(".form-group")
          .find(".isError")
          .css("display", "none");
      } else {
        $(element)
          .closest(".form-group")
          .find(".isValid")
          .css("display", "none");
        $(element)
          .closest(".form-group")
          .find(".isError")
          .css("display", "block");
      }
    },
    errorElement: "div",
    errorPlacement: function (error, element) {
      if ($(element).is("#phone")) {
        error.appendTo(element.closest(".form-group"));
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      email: {
        required: true,
        // minlength: 8,
        domainEmail: true,
      },
      fname: {
        required: true,
        minlength: 2,
      },
      lname: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        digits: true,
        minlength: 6,
        isValidPhoneNumber: true,
      },
      message: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      email: {
        required: requiredfielderrors,
        domainEmail: emailinvaliderrors,
      },
      fname: {
        required: requiredfielderrors,
        minlength: jQuery.validator.format(minlengtherrors),
      },
      lname: {
        required: requiredfielderrors,
        minlength: jQuery.validator.format(minlengtherrors),
      },
      message: {
        required: requiredfielderrors,
        minlength: minlengtherrors,
      },
      phone: {
        required: requiredfielderrors,
        digits: onlyDigitsErrors,
        minlength: jQuery.validator.format(minlengtherrors),
        isValidPhoneNumber: phoneinvaliderrors,
      },
    },
  });
}
function watchOptions() {
  let selected = $("select#country option:selected").text();

  $("select#country").on("change", function () {
    selected = this.value;
    $(".phone-prefix").val("+" + selected);
  });
}
// create methot to validate if the phone number is valid
jQuery.validator.addMethod(
  "isValidPhoneNumber",
  function (value, element) {
    // console.log($('.phone-prefix').val() + value)
    let result = libphonenumber
      .parsePhoneNumber($(".phone-prefix").val() + value)
      .isValid();
    return result;
  },
  phoneinvaliderrors
);
jQuery.validator.addMethod(
  "domainEmail",
  function (value, element) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    );
  },
  emailinvaliderrors
);
// ======================================================================================================================================================================================
// ==============================================================  ON DOC READY   =======================================================================================================
// ======================================================================================================================================================================================
$(document).ready(function () {
  GetLocation();
  $("#submit").on("click", (e) => {
    e.preventDefault();
    console.log($(".phone-prefix").val());
    console.log($("#phone").val());

    if ($("#contact_form").valid()) {
      let fname = $("#fname").val();
      let lname = $("#lname").val();
      let email = $("#email").val();
      let phonePrefix = $(".phone-prefix").val();
      let phoneNumber = $("#phone").val();

      fname = $.trim(fname);
      lname = $.trim(lname);
      email = $.trim(email);
      phoneNumber = $.trim(phoneNumber);
      clientData = {
        EMail: email,
        FirstName: fname,
        LastName: lname,
        Language: "en",
        Country: currentcountryname,
        PhoneCountryCode: phonePrefix,
        Phone: phoneNumber,
        CampaignName: "",
        Advertiser: "",
        Referrer: "",
        CustomField: "",
        AcceptTermsAndConditions: true,
        ApproveReceiveCommercial: true,
        IPAddress: currentip,
        IPCountry: ipcountry,
      };

      var successMessage =
        '<div class="success-message-container">' +
        '<p class="success-message"> ' +
        successValidationMessage +
        " </p>" +
        "</div>";
        $.ajax({
            method: "POST",
            url: "https://ggmt-safebarrier.com/services/email/",
            contentType: "application/json",
            data: clientData,
            dataType: "json",
        })
        .done((data) => {
            console.log(data.response);
            $("#contact_form").html(successMessage);
        })
        .fail((err) => {
          console.log(err);
        });
    }
  });
});
