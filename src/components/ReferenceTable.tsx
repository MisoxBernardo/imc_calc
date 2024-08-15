function ReferenceTable() {
    return(
        <table className="mx-auto text-neutral-600 text-left md:text-base  text-xs">
          <thead className="bg-gray-200 text-teal-600">
            <tr>
              <th className="px-auto py-4 text-left">IMC</th>
              <th className="px-auto py-4 text-left">Classificação</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(even)]:bg-gray-200 [&>tr:nth-child(odd)]:bg-white [&>tr>td]:px-6 [&>tr>td]:py-4">
            <tr>
              <th>Menor que 17</th>
              <th>Muito abaixo do peso</th>
            </tr>

            <tr>
              <th>Menor que 18,5</th>
              <th>Abaixo do peso</th>
            </tr>

            <tr>
              <th>Entre 18,5 e 24,9</th>
              <th>Normal</th>
            </tr>

            <tr>
              <th>Entre 25 e 29,9</th>
              <th>Sobrepeso</th>
            </tr>

            <tr>
              <th>Entre 30 e 34,9</th>
              <th>Obesidade I</th>
            </tr>

            <tr>
              <th>Entre 35 e 39,9</th>
              <th>Obesidade II (severa)</th>
            </tr>

            <tr>
              <th>Acima de 40</th>
              <th>Obesidade III (mórbida)</th>
            </tr>


          </tbody>
        </table>
    )
}

export default ReferenceTable