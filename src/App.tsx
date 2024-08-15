import React, { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import Label from "./components/Label"
import ReferenceTable from "./components/ReferenceTable"
import { calculateIMC, IMCResult } from "./lib/IMC"
import { formatNumber } from "./lib/utils"
import ResultsTable from "./components/ResultsTable"

function App() {

  const [IMCData, setIMCData] = useState<null | {
    weight: number; height: number;
    IMC: number; IMCResult: string
  }>(null)



  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    //Get data from form (Buscar dados do form)
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData) as { weight: string, height: string };


    //handle empty fields (tratamento de campos vazios)
    const { weight, height } = data;
    if (!weight || !height) {
      alert('Ops... Você precisa preencher todos os campos!');
      return;
    }



    //ParseFloat and handle(Transformar string em number)
    const weightNumber = parseFloat(weight.replace(',', '.'));
    const heightNumber = parseFloat(height.replace(',', '.')) / 100;

    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      alert('Ops... Você precisa preencher todos os campos!');
      return;
    }

    //handle invalid number
    if (weightNumber < 2 || weightNumber > 500) {
      alert('Ops.. O peso precisa ser maior que 2Kg e menor que 500Kg')
    }

    if (heightNumber < 0.5 || heightNumber > 2.5) {
      alert('Ops.. A altura precisa ser maior que 0.5m e menor que 2.5m')
    }

    //calculate imc
    const IMC = calculateIMC(weightNumber, heightNumber)
    const IMCResultString = IMCResult(IMC)

    //set result
    setIMCData({
      weight: weightNumber,
      height: heightNumber,
      IMC: IMC,
      IMCResult: IMCResultString
    })

    //clear form
      e.currentTarget.reset();
      

  }


  function handleClickReset(e: React.MouseEvent <HTMLButtonElement>){
    e.preventDefault()
    setIMCData(null);
  }

  return (
    <main className="bg-white max-w-4xl mx-auto md:py-24 md:px-48 px-5 py-10">

      <section id="form">
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="weight">Pèso (kg)</Label>
            <Input disabled={!!IMCData} name="weight" className="mt-2" type="text" id="weight"></Input>
          </div>
          <div className="mt-4">
            <Label htmlFor="height">Altura (cm)</Label>
            <Input disabled={!!IMCData} name="height" className="mt-2" type="text" id="height"></Input>
          </div>
          {IMCData ? (
            <Button onClick={handleClickReset}>Refazer</Button>
          ) : (
          <Button type="submit">Calcular</Button>
          ) }

        </form>
      </section>

      <section id="result" className="py-10 px-4 h-40">

        {IMCData ? (
         <ResultsTable IMCData={IMCData} />
        ) : (

          <p className="text-center text-neutral-400 text-xl">
            Saiba agora se está no seu peso ideal
          </p>

        )}

      </section>

      <section id="reference-table">
        <ReferenceTable></ReferenceTable>
      </section>
    </main>
  )
}

export default App
