export function init(Survey) {
    var widget = {
        //the widget name. It should be unique and written in lowcase.
        name: "textwithbutton",
        //the widget title. It is how it will appear on the toolbox of the SurveyJS Editor/Builder
        title: "Text with button",
        //the name of the icon on the toolbox. We will leave it empty to use the standard one
        iconName: "",
        //If the widgets depends on third-party library(s) then here you may check if this library(s) is loaded
        widgetIsLoaded: function () {
            //return typeof $ == "function" && !!$.fn.select2; //return true if jQuery and select2 widget are loaded on the page
            return true; //we do not require anything so we just return true. 
        },
       
        isFit: function (question) {
 
            return question.getType() === 'textwithbutton';
      
        },
   
        // eslint-disable-next-line
        activatedByChanged: function (activatedBy) {
           
            Survey.JsonObject.metaData.addClass("textwithbutton", [], null, "text");
        
            Survey.JsonObject.metaData.addProperties("textwithbutton", [
                { name: "buttonText", default: "Click Me" }
            ]);
        },
        
        isDefaultRender: false,
        
        htmlTemplate: "<div><input /><button></button></div>",
     
        afterRender: function (question, el) {
            
            var text = el.getElementsByTagName("input")[0];
            
            text.inputType = question.inputType;
            text.placeholder = question.placeHolder;
            
            var button = el.getElementsByTagName("button")[0];
            button.innerText = question.buttonText;
            button.onclick = function () {
                question.value = "You have clicked me";
            }
      
         
            text.onchange = function () {
                question.value = text.value;
            }
            var onValueChangedCallback = function () {
                text.value = question.value ? question.value : "";
            }
            var onReadOnlyChangedCallback = function() {
              if (question.isReadOnly) {
                text.setAttribute('disabled', 'disabled');
                button.setAttribute('disabled', 'disabled');
              } else {
                text.removeAttribute("disabled");
                button.removeAttribute("disabled");
              }
            };
           
            question.readOnlyChangedCallback = onReadOnlyChangedCallback;
            
            question.valueChangedCallback = onValueChangedCallback;
          
            onValueChangedCallback();
           
            onReadOnlyChangedCallback();
      
        },
      
     
      }
      
      Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
      
}