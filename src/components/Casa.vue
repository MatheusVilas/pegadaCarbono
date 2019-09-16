<template>
  <form>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Casa</div>
        <p>Preencha os dados relacionados ao seu consumo de energia e de gás. É importante sabermos quantas pessoas moram com você para que essa emissão seja dividida entre os moradores.</p>
      </md-card-header>
      <md-card-content>
        <div>
          <section>
            <h3>Consumo médio mensal de energia elétrica</h3>
            <div>
              <md-radio v-model="radio1" value="eletrica-reais">R$/mês:</md-radio>
              <md-field v-if="radio1 === 'eletrica-reais'">
                <md-input for v-model="consumoEletricaReais"></md-input>
              </md-field>
            </div>
            <div>
              <md-radio v-model="radio1" value="eletrica-kilo">kWh/mês:</md-radio>
              <md-field v-if="radio1 === 'eletrica-kilo'">
                <md-input for v-model="consumoEletricaKilo"></md-input>
              </md-field>
            </div>
          </section>

          <section>
            <h3>Consumo médio mensal de gás</h3>
            <div>
              <md-radio v-model="radio2" value="gas-reais">R$/mês:</md-radio>
              <md-field v-if="radio2 === 'gas-reais'">
                <md-input for v-model="consumoGasReais"></md-input>
              </md-field>
            </div>
            <div>
              <md-radio v-model="radio2" value="gas-metros">
                m
                <sup>3</sup> /mês:
              </md-radio>
              <md-field v-if="radio2 === 'gas-metros'">
                <md-input for v-model="consumoGasMetros"></md-input>
              </md-field>
            </div>
            <div>
              <md-radio v-model="radio2" value="eletrica-botijao">Botijão/mês:</md-radio>
              <md-field v-if="radio2 === 'eletrica-botijao'">
                <md-input for v-model="consumoEletricaBotijao"></md-input>
              </md-field>
            </div>
          </section>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
export default {
  name: "Casa",
  data: () => ({
    consumoEletricaReais: "",
    consumoEletricaKilo: "",
    consumoGasReais: "",
    consumoGasMetros: "",
    consumoEletricaBotijao: "",
    radio1: "",
    radio2: ""
  })
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  margin: 0 auto;
}
</style>