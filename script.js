document.getElementByID["calculate_button"].click(calculateValues());

function calculateValues() {
  var input = document.forms["EC_in"];
  var ptA = document.forms["EC_partA"];
  var ptB = document.forms["EC_partB"];
  var bloom = document.forms["EC_Bloom"];
  var totals = document.forms["EC_totals"];

  var ptA_EC   = 0.322;
  var ptB_EC   = 0.255;
  var blm_EC   = 0.18;
  
  var ptA_veg  = 4.04;
  var ptB_veg  = 2.7;
    
  var ptA_flow = 3.25;
  var ptB_flow = 2.18;
  var blm_flow = 2.56;

  var ptA_mLc = 849/3785;
  var ptB_mLc = 570/3785;
  var blm_mLc = 667/3785;

  var veg1_ptA_out2 = ((input.elements["veg1"].value/2)*(ptA_EC * ptA_veg)).toFixed(2);
  var veg2_ptA_out2 = ((input.elements["veg2"].value/2)*(ptA_EC * ptA_veg)).toFixed(2);
  var veg3_ptA_out2 = ((input.elements["veg3"].value/2)*(ptA_EC * ptA_veg)).toFixed(2);
  var flow1_ptA_out2 = ((input.elements["flow1"].value/2)*(ptA_EC * ptA_flow * 1.025)).toFixed(2);
  var flow2_ptA_out2 = ((input.elements["flow2"].value/2)*(ptA_EC * ptA_flow)).toFixed(2);
  var flow3_ptA_out2 = ((input.elements["flow3"].value/2)*(ptA_EC * ptA_flow)).toFixed(2);
  var flow4_ptA_out2 = ((input.elements["flow4"].value/2)*(ptA_EC * ptA_flow * 0.95)).toFixed(2);
  var flow5_ptA_out2 = ((input.elements["flow5"].value/2)*(ptA_EC * ptA_flow * 0.95)).toFixed(2);
  var flow6_ptA_out2 = ((input.elements["flow6"].value/2)*(ptA_EC * ptA_flow * 0.9)).toFixed(2);
  var flow7_ptA_out2 = ((input.elements["flow7"].value/2)*(ptA_EC * ptA_flow * 0.9)).toFixed(2);
  
  var veg1_ptB_out2 = ((input.elements["veg1"].value/2)*(ptB_EC * ptB_veg)).toFixed(2);
  var veg2_ptB_out2 = ((input.elements["veg2"].value/2)*(ptB_EC * ptB_veg)).toFixed(2);
  var veg3_ptB_out2 = ((input.elements["veg3"].value/2)*(ptB_EC * ptB_veg)).toFixed(2);
  var flow1_ptB_out2 = ((input.elements["flow1"].value/2)*(ptB_EC * ptB_flow * 1.025)).toFixed(2);
  var flow2_ptB_out2 = ((input.elements["flow2"].value/2)*(ptB_EC * ptB_flow)).toFixed(2);
  var flow3_ptB_out2 = ((input.elements["flow3"].value/2)*(ptB_EC * ptB_flow)).toFixed(2);
  var flow4_ptB_out2 = ((input.elements["flow4"].value/2)*(ptB_EC * ptB_flow * 0.95)).toFixed(2);
  var flow5_ptB_out2 = ((input.elements["flow5"].value/2)*(ptB_EC * ptB_flow * 0.95)).toFixed(2);
  var flow6_ptB_out2 = ((input.elements["flow6"].value/2)*(ptB_EC * ptB_flow * 0.9)).toFixed(2);
  var flow7_ptB_out2 = ((input.elements["flow7"].value/2)*(ptB_EC * ptB_flow * 0.9)).toFixed(2);
    
  var veg1_blm_out2 = 0;
  var veg2_blm_out2 = 0;
  var veg3_blm_out2 = 0;
  var flow1_blm_out2 = ((input.elements["flow1"].value/2)*(blm_EC * blm_flow * 0.85)).toFixed(2);
  var flow2_blm_out2 = ((input.elements["flow2"].value/2)*(blm_EC * blm_flow * 0.95)).toFixed(2);
  var flow3_blm_out2 = ((input.elements["flow3"].value/2)*(blm_EC * blm_flow * 0.95)).toFixed(2);
  var flow4_blm_out2 = ((input.elements["flow4"].value/2)*(blm_EC * blm_flow * 1.1)).toFixed(2);
  var flow5_blm_out2 = ((input.elements["flow5"].value/2)*(blm_EC * blm_flow * 1.1)).toFixed(2);
  var flow6_blm_out2 = ((input.elements["flow6"].value/2)*(blm_EC * blm_flow * 1.15)).toFixed(2);
  var flow7_blm_out2 = ((input.elements["flow7"].value/2)*(blm_EC * blm_flow * 1.15)).toFixed(2);
  
  ptA.elements["veg1_out2"].value = veg1_ptA_out2;
  ptA.elements["veg2_out2"].value = veg2_ptA_out2;
  ptA.elements["veg3_out2"].value = veg3_ptA_out2;
  ptA.elements["flow1_out2"].value = flow1_ptA_out2;
  ptA.elements["flow2_out2"].value = flow2_ptA_out2;
  ptA.elements["flow3_out2"].value = flow3_ptA_out2;
  ptA.elements["flow4_out2"].value = flow4_ptA_out2;
  ptA.elements["flow5_out2"].value = flow5_ptA_out2;
  ptA.elements["flow6_out2"].value = flow6_ptA_out2;
  ptA.elements["flow7_out2"].value = flow7_ptA_out2;
  
  ptB.elements["veg1_out2"].value = veg1_ptB_out2;
  ptB.elements["veg2_out2"].value = veg2_ptB_out2;
  ptB.elements["veg3_out2"].value = veg3_ptB_out2;
  ptB.elements["flow1_out2"].value = flow1_ptB_out2;
  ptB.elements["flow2_out2"].value = flow2_ptB_out2;
  ptB.elements["flow3_out2"].value = flow3_ptB_out2;
  ptB.elements["flow4_out2"].value = flow4_ptB_out2;
  ptB.elements["flow5_out2"].value = flow5_ptB_out2;
  ptB.elements["flow6_out2"].value = flow6_ptB_out2;
  ptB.elements["flow7_out2"].value = flow7_ptB_out2;
  
  bloom.elements["veg1_out2"].value = veg1_blm_out2;
  bloom.elements["veg2_out2"].value = veg2_blm_out2;
  bloom.elements["veg3_out2"].value = veg3_blm_out2;
  bloom.elements["flow1_out2"].value = flow1_blm_out2;
  bloom.elements["flow2_out2"].value = flow2_blm_out2;
  bloom.elements["flow3_out2"].value = flow3_blm_out2;
  bloom.elements["flow4_out2"].value = flow4_blm_out2;
  bloom.elements["flow5_out2"].value = flow5_blm_out2;
  bloom.elements["flow6_out2"].value = flow6_blm_out2;
  bloom.elements["flow7_out2"].value = flow7_blm_out2;
  
  totals.elements["veg1_total"].value = Number(veg1_ptA_out2) + Number(veg1_ptB_out2);
  totals.elements["veg2_total"].value = Number(veg2_ptA_out2) + Number(veg2_ptB_out2);
  totals.elements["veg3_total"].value = Number(veg3_ptA_out2) + Number(veg3_ptB_out2);
  totals.elements["flow1_total"].value = Number(flow1_ptA_out2) + Number(flow1_ptB_out2) + Number(flow1_blm_out2);
  totals.elements["flow2_total"].value = Number(flow2_ptA_out2) + Number(flow2_ptB_out2) + Number(flow2_blm_out2);
  totals.elements["flow3_total"].value = Number(flow3_ptA_out2) + Number(flow3_ptB_out2) + Number(flow3_blm_out2);
  totals.elements["flow4_total"].value = Number(flow4_ptA_out2) + Number(flow4_ptB_out2) + Number(flow4_blm_out2);
  totals.elements["flow5_total"].value = Number(flow5_ptA_out2) + Number(flow5_ptB_out2) + Number(flow5_blm_out2);
  totals.elements["flow6_total"].value = Number(flow6_ptA_out2) + Number(flow6_ptB_out2) + Number(flow6_blm_out2);
  totals.elements["flow7_total"].value = Number(flow7_ptA_out2) + Number(flow7_ptB_out2) + Number(flow7_blm_out2);
  
  var veg1_ptA_g = ((veg1_ptA_out2)/ptA_EC).toFixed(1);
  var veg2_ptA_g = ((veg2_ptA_out2)/ptA_EC).toFixed(1);
  var veg3_ptA_g = ((veg3_ptA_out2)/ptA_EC).toFixed(1);
  var flow1_ptA_g = ((flow1_ptA_out2)/ptA_EC).toFixed(1);
  var flow2_ptA_g = ((flow2_ptA_out2)/ptA_EC).toFixed(1);
  var flow3_ptA_g = ((flow3_ptA_out2)/ptA_EC).toFixed(1);
  var flow4_ptA_g = ((flow4_ptA_out2)/ptA_EC).toFixed(1);
  var flow5_ptA_g = ((flow5_ptA_out2)/ptA_EC).toFixed(1);
  var flow6_ptA_g = ((flow6_ptA_out2)/ptA_EC).toFixed(1);
  var flow7_ptA_g = ((flow7_ptA_out2)/ptA_EC).toFixed(1);
  
  var veg1_ptB_g = ((veg1_ptB_out2)/ptB_EC).toFixed(1);
  var veg2_ptB_g = ((veg2_ptB_out2)/ptB_EC).toFixed(1);
  var veg3_ptB_g = ((veg3_ptB_out2)/ptB_EC).toFixed(1);
  var flow1_ptB_g = ((flow1_ptB_out2)/ptB_EC).toFixed(1);
  var flow2_ptB_g = ((flow2_ptB_out2)/ptB_EC).toFixed(1);
  var flow3_ptB_g = ((flow3_ptB_out2)/ptB_EC).toFixed(1);
  var flow4_ptB_g = ((flow4_ptB_out2)/ptB_EC).toFixed(1);
  var flow5_ptB_g = ((flow5_ptB_out2)/ptB_EC).toFixed(1);
  var flow6_ptB_g = ((flow6_ptB_out2)/ptB_EC).toFixed(1);
  var flow7_ptB_g = ((flow7_ptB_out2)/ptB_EC).toFixed(1);
  
  var flow1_blm_g = ((flow1_blm_out2)/blm_EC).toFixed(1);
  var flow2_blm_g = ((flow2_blm_out2)/blm_EC).toFixed(1);
  var flow3_blm_g = ((flow3_blm_out2)/blm_EC).toFixed(1);
  var flow4_blm_g = ((flow4_blm_out2)/blm_EC).toFixed(1);
  var flow5_blm_g = ((flow5_blm_out2)/blm_EC).toFixed(1);
  var flow6_blm_g = ((flow6_blm_out2)/blm_EC).toFixed(1);
    var flow7_blm_g = ((flow7_blm_out2)/blm_EC).toFixed(1);

    if (input.elements["type"].value == "DtL")
    {
        ptA.elements["veg1_out1"].value = veg1_ptA_g;
        ptA.elements["veg2_out1"].value = veg2_ptA_g;
        ptA.elements["veg3_out1"].value = veg3_ptA_g;
        ptA.elements["flow1_out1"].value = flow1_ptA_g;
        ptA.elements["flow2_out1"].value = flow2_ptA_g;
        ptA.elements["flow3_out1"].value = flow3_ptA_g;
        ptA.elements["flow4_out1"].value = flow4_ptA_g;
        ptA.elements["flow5_out1"].value = flow5_ptA_g;
        ptA.elements["flow6_out1"].value = flow6_ptA_g;
        ptA.elements["flow7_out1"].value = flow7_ptA_g;
        
        ptA.elements["veg1_out1"].value = veg1_ptA_g;
        ptA.elements["veg2_out1"].value = veg2_ptA_g;
        ptA.elements["veg3_out1"].value = veg3_ptA_g;
        ptA.elements["flow1_out1"].value = flow1_ptA_g;
        ptA.elements["flow2_out1"].value = flow2_ptA_g;
        ptA.elements["flow3_out1"].value = flow3_ptA_g;
        ptA.elements["flow4_out1"].value = flow4_ptA_g;
        ptA.elements["flow5_out1"].value = flow5_ptA_g;
        ptA.elements["flow6_out1"].value = flow6_ptA_g;
        ptA.elements["flow7_out1"].value = flow7_ptA_g;
    }
    else if (input.elements["type"].value == "conc")
    {
      ptA.elements["veg1_out1"].value = veg1_ptA_g/ptA_mLc;
      ptA.elements["veg2_out1"].value = veg2_ptA_g/ptA_mLc;
      ptA.elements["veg3_out1"].value = veg3_ptA_g/ptA_mLc;
      ptA.elements["flow1_out1"].value = flow1_ptA_g/ptA_mLc;
      ptA.elements["flow2_out1"].value = flow2_ptA_g/ptA_mLc;
      ptA.elements["flow3_out1"].value = flow3_ptA_g/ptA_mLc;
      ptA.elements["flow4_out1"].value = flow4_ptA_g/ptA_mLc;
      ptA.elements["flow5_out1"].value = flow5_ptA_g/ptA_mLc;
      ptA.elements["flow6_out1"].value = flow6_ptA_g/ptA_mLc;
      ptA.elements["flow7_out1"].value = flow7_ptA_g/ptA_mLc;
  }
  //these values are always zero
  ptA.elements["flow8_out1"].value = 0;
  ptA.elements["flow8_out2"].value = 0;
  ptB.elements["flow8_out1"].value = 0;
  ptB.elements["flow8_out2"].value = 0;
  bloom.elements["veg1_out1"].value = 0;
  bloom.elements["veg1_out2"].value = 0;
  bloom.elements["veg2_out1"].value = 0;
  bloom.elements["veg2_out2"].value = 0;
  bloom.elements["veg3_out1"].value = 0;
  bloom.elements["veg3_out2"].value = 0;
  bloom.elements["flow8_out1"].value = 0;
  bloom.elements["flow8_out2"].value = 0;
  totals.elements["flow8_total"].value = 0;
}