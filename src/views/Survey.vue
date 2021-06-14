<template>
  <div class="container show">
    <!-- If you want to hide survey, comment the lines below -->
    <div class="container verde"> <h1>FORMULÁRIO</h1> </div>
    <survey :survey="survey"></survey>

    <div id="surveyResult"></div>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import "bootstrap/dist/css/bootstrap.css";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

import * as widgets from "surveyjs-widgets";

import { init as customWidget } from "../components/customwidget";

// widgets.icheck(SurveyVue);
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);
customWidget(SurveyVue);

SurveyVue.Serializer.addProperty("question", "tag:number");

export default {
  components: {
    Survey
  },
  data() {
    var json = {
 locale: "pt-br",
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "text",
     name: "nome",
     title: {
      "pt-br": "Digite seu nome"
     }
    },
    {
     type: "radiogroup",
     name: "vacOrShrek",
     title: {
      "pt-br": "Você trocaria a vacina pelo filme shrek 5?"
     },
     correctAnswer: "item3",
     isRequired: true,
     requiredErrorText: "!!!!!!!!",
     choices: [
      {
       value: "sim",
       text: "sim"
      },
      {
       value: "Não",
       text: "Não"
      }
     ]
    },
    {
     type: "text",
     name: "meme",
     title: {
      "pt-br": "Deixe o link do seu meme preferido"
     },
     isRequired: true,
     requiredErrorText: {
      "pt-br": "Eh um link cara"
     },
     inputType: "url",
     maxLength: 500
    }
   ],
   questionTitleLocation: "top",
   title: "Processo seletivo para minha amizade",
   description: "Este formulário visa abordar importantes aspectos para ver se podemos ou não ter uma amizade.",
   navigationButtonsVisibility: "show",
   questionsOrder: "initial"
  }
 ],
 checkErrorsMode: "onComplete"
}
    var model = new SurveyVue.Model(json);
    
function sendDataToServer(model) {
    
    
    model.sendResult('b3461958-fdf7-47ef-a3ff-9b7fe864e522');


    alert("The results are:" + JSON.stringify(model.data));
    
}
model.onComplete.add(function (model) {
        document
            .querySelector('#surveyResult')
            .textContent = "nome:\n" + JSON.stringify(model.data.nome, null, 3)+"; troca a vacina pelo filme do shrek?: \n" + JSON.stringify(model.data.vacOrShrek, null, 3)+"; meme preferido: \n" + JSON.stringify(model.data.meme, null, 3);
    });

model.onComplete.add(sendDataToServer);
    return {
      survey: model
    };
  }
};
</script>

<style>
.show{
  height: 100vh;
}
.verde{
  color: #1AB394
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
