<template>
  <div id="chart">
    <div class="chartprop">
      <FermiDistribution :max="600" :min="100" />
    </div>
    <div class="chartprop">
      <FunctionChart />
    </div>
    <div class="chartprop">
      <Dos />
    </div>
    <div class = "chartprop">
      <carrierconc />
    </div>
    <div class = "chartprop">
      <EnergyGap />
    </div>
    <div class="chartprop">
      <OtherChart />
    </div>
    <div class="chartprop">
      <DiscontinuedChart />
    </div>
   
    <div class="chartprop">
      <PN_Electric_Field />
    </div>
    <div class="chartprop">
      <PN_Electric_Potential />
    </div>
  </div>
</template>

<script>
import FunctionChart from "../../chartTemplates/FunctionChart";
import FermiDistribution from "../../charts/FermiDistribution.vue";
import DiscontinuedChart from "../../charts/DiscontinuedChart.vue";
import carrierconc from "../../charts/carrierconc.vue";
import EnergyGap from "../../charts/EnergyGap.vue";
import Dos from "../../DOSchart/Dos.vue";
//import PN_Charge_Density_Chart from "../../charts/PN_Charge_Density_Chart.vue"
import PN_Electric_Field from "../../charts/PN_Electric_Field.vue"
import PN_Electric_Potential from "../../charts/PN_Electric_Potential.vue"
import OtherChart from "../../DOSchart/OtherChart";
export default {
  name: "Charts",
  components: {
    FermiDistribution,
    FunctionChart,
    DiscontinuedChart,
    Dos,
    carrierconc,
    EnergyGap,
    PN_Electric_Field,
    PN_Electric_Potential,
    //PN_Charge_Density_Chart,
    OtherChart,
  },
};
</script>

<style>
#chart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 254px;
}
.chartprop {
  max-width: 700px;
  max-height: 500px;
}
</style>
