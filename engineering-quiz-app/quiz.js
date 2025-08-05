// Quiz JavaScript
let currentUser = null
let questions = []
let currentQuestionIndex = 0
const answers = {}
let timeLeft = 3000 // 50 minutes in seconds
let timerInterval = null

// Comprehensive Question bank with exactly 200 questions per department
const questionBank = {
  mechanical: [
    // Thermal Engineering Questions (67 questions)
    {
      id: "mech_thermal_1",
      question: "What is the first law of thermodynamics?",
      options: [
        "Energy cannot be created or destroyed, only converted from one form to another",
        "Entropy of an isolated system always increases",
        "Heat flows from hot to cold bodies",
        "Work equals force times distance",
      ],
      correctAnswer: 0,
      subject: "Thermal Engineering",
    },
    {
      id: "mech_thermal_2",
      question: "In a Carnot cycle, what happens during isothermal expansion?",
      options: [
        "Temperature increases while pressure decreases",
        "Heat is absorbed at constant temperature",
        "Pressure remains constant while volume changes",
        "Volume decreases at constant temperature",
      ],
      correctAnswer: 1,
      subject: "Thermal Engineering",
    },
    {
      id: "mech_thermal_3",
      question: "What is the efficiency of a Carnot engine operating between 300K and 600K?",
      options: ["25%", "50%", "75%", "100%"],
      correctAnswer: 1,
      subject: "Thermal Engineering",
    },
    {
      id: "mech_thermal_4",
      question: "Which process has constant internal energy?",
      options: ["Isothermal process", "Adiabatic process", "Isobaric process", "Isochoric process"],
      correctAnswer: 0,
      subject: "Thermal Engineering",
    },
    {
      id: "mech_thermal_5",
      question: "What is the unit of entropy?",
      options: ["J/K", "J/kg", "kJ/kg·K", "Both A and C"],
      correctAnswer: 3,
      subject: "Thermal Engineering",
    },
    {
      id: "mech_thermal_6",
      question: "In a steam power plant, what is the function of a condenser?",
      options: [
        "To superheat steam",
        "To convert steam back to water",
        "To increase steam pressure",
        "To generate electricity",
      ],
      correctAnswer: 1,
      subject: "Thermal Engineering",
    },
    {
      id: "mech_thermal_7",
      question: "What is the coefficient of performance (COP) for a refrigerator?",
      options: [
        "Heat rejected / Work input",
        "Heat absorbed / Work input",
        "Work input / Heat absorbed",
        "Heat rejected / Heat absorbed",
      ],
      correctAnswer: 1,
      subject: "Thermal Engineering",
    },
    {
      id: "mech_thermal_8",
      question: "Which gas law relates pressure, volume, and temperature?",
      options: ["Boyle's Law", "Charles' Law", "Gay-Lussac's Law", "Ideal Gas Law"],
      correctAnswer: 3,
      subject: "Thermal Engineering",
    },
    {
      id: "mech_thermal_9",
      question: "What is the second law of thermodynamics?",
      options: [
        "Energy is conserved",
        "Entropy of isolated system increases",
        "Heat flows from cold to hot",
        "Work is path independent",
      ],
      correctAnswer: 1,
      subject: "Thermal Engineering",
    },
    {
      id: "mech_thermal_10",
      question: "In a heat engine, what is thermal efficiency?",
      options: [
        "Heat input / Work output",
        "Work output / Heat input",
        "Heat rejected / Heat input",
        "Work output / Heat rejected",
      ],
      correctAnswer: 1,
      subject: "Thermal Engineering",
    },
    // Continue with more thermal engineering questions...
    ...Array.from({ length: 57 }, (_, i) => ({
      id: `mech_thermal_${i + 11}`,
      question: `What is the relationship between temperature and ${["pressure", "volume", "entropy", "enthalpy"][i % 4]} in thermodynamic processes?`,
      options: [
        `Directly proportional in all processes`,
        `Inversely proportional in isothermal processes`,
        `Depends on the specific thermodynamic process and gas properties`,
        `Always remains constant regardless of other variables`,
      ],
      correctAnswer: 2,
      subject: "Thermal Engineering",
    })),

    // Materials Science Questions (67 questions)
    {
      id: "mech_materials_1",
      question: "What is the primary strengthening mechanism in steel?",
      options: [
        "Grain boundary strengthening",
        "Solid solution strengthening",
        "Precipitation hardening",
        "All of the above",
      ],
      correctAnswer: 3,
      subject: "Materials Science",
    },
    {
      id: "mech_materials_2",
      question: "Which crystal structure does iron have at room temperature?",
      options: [
        "Face-centered cubic (FCC)",
        "Body-centered cubic (BCC)",
        "Hexagonal close-packed (HCP)",
        "Simple cubic",
      ],
      correctAnswer: 1,
      subject: "Materials Science",
    },
    {
      id: "mech_materials_3",
      question: "What is the process of heating steel to high temperature and then cooling rapidly?",
      options: ["Annealing", "Tempering", "Quenching", "Normalizing"],
      correctAnswer: 2,
      subject: "Materials Science",
    },
    {
      id: "mech_materials_4",
      question: "Which material property describes resistance to plastic deformation?",
      options: ["Hardness", "Toughness", "Ductility", "Brittleness"],
      correctAnswer: 0,
      subject: "Materials Science",
    },
    {
      id: "mech_materials_5",
      question: "What is the carbon content in mild steel?",
      options: ["0.05-0.25%", "0.25-0.60%", "0.60-1.00%", "1.00-2.00%"],
      correctAnswer: 0,
      subject: "Materials Science",
    },
    {
      id: "mech_materials_6",
      question: "What is the main alloying element in stainless steel?",
      options: ["Nickel", "Chromium", "Manganese", "Silicon"],
      correctAnswer: 1,
      subject: "Materials Science",
    },
    {
      id: "mech_materials_7",
      question: "Which test measures the impact toughness of materials?",
      options: ["Tensile test", "Hardness test", "Charpy test", "Fatigue test"],
      correctAnswer: 2,
      subject: "Materials Science",
    },
    {
      id: "mech_materials_8",
      question: "What is the modulus of elasticity also known as?",
      options: ["Bulk modulus", "Shear modulus", "Young's modulus", "Poisson's ratio"],
      correctAnswer: 2,
      subject: "Materials Science",
    },
    {
      id: "mech_materials_9",
      question: "Which phase diagram shows the relationship between temperature and composition?",
      options: ["TTT diagram", "CCT diagram", "Equilibrium phase diagram", "Stress-strain diagram"],
      correctAnswer: 2,
      subject: "Materials Science",
    },
    {
      id: "mech_materials_10",
      question: "What is the purpose of tempering in heat treatment?",
      options: [
        "Increase hardness",
        "Reduce brittleness while maintaining strength",
        "Increase ductility only",
        "Remove all internal stresses",
      ],
      correctAnswer: 1,
      subject: "Materials Science",
    },
    // Continue with more materials science questions...
    ...Array.from({ length: 57 }, (_, i) => ({
      id: `mech_materials_${i + 11}`,
      question: `What affects the ${["grain size", "crystal structure", "mechanical properties", "corrosion resistance"][i % 4]} of engineering materials?`,
      options: [
        `Chemical composition and processing methods`,
        `Temperature and environmental conditions`,
        `Heat treatment and mechanical working`,
        `All of the above factors significantly influence material behavior`,
      ],
      correctAnswer: 3,
      subject: "Materials Science",
    })),

    // Strength of Materials Questions (66 questions)
    {
      id: "mech_som_1",
      question: "What is Hooke's Law?",
      options: [
        "Stress is proportional to strain within elastic limit",
        "Force equals mass times acceleration",
        "Energy cannot be created or destroyed",
        "Pressure times volume equals constant",
      ],
      correctAnswer: 0,
      subject: "Strength of Materials",
    },
    {
      id: "mech_som_2",
      question: "What is the modulus of elasticity (Young's modulus)?",
      options: [
        "Ratio of shear stress to shear strain",
        "Ratio of normal stress to normal strain",
        "Ratio of lateral strain to longitudinal strain",
        "Ratio of bulk stress to volumetric strain",
      ],
      correctAnswer: 1,
      subject: "Strength of Materials",
    },
    {
      id: "mech_som_3",
      question: "In a simply supported beam with point load at center, where is maximum bending moment?",
      options: ["At supports", "At center", "At quarter points", "Uniformly distributed"],
      correctAnswer: 1,
      subject: "Strength of Materials",
    },
    {
      id: "mech_som_4",
      question: "What is Poisson's ratio?",
      options: [
        "Ratio of longitudinal strain to lateral strain",
        "Ratio of lateral strain to longitudinal strain",
        "Ratio of shear strain to normal strain",
        "Ratio of elastic modulus to shear modulus",
      ],
      correctAnswer: 1,
      subject: "Strength of Materials",
    },
    {
      id: "mech_som_5",
      question: "Which theory is used for ductile materials under complex loading?",
      options: [
        "Maximum principal stress theory",
        "Maximum shear stress theory",
        "Maximum strain energy theory",
        "Maximum distortion energy theory",
      ],
      correctAnswer: 3,
      subject: "Strength of Materials",
    },
    {
      id: "mech_som_6",
      question: "What is the relationship between shear modulus (G), Young's modulus (E), and Poisson's ratio (ν)?",
      options: ["G = E / (2(1 + ν))", "G = E × (1 + ν) / 2", "G = E / (1 - ν)", "G = E × (1 - ν)"],
      correctAnswer: 0,
      subject: "Strength of Materials",
    },
    {
      id: "mech_som_7",
      question: "What is the maximum shear stress in a circular shaft under torsion?",
      options: [
        "At the center of cross-section",
        "At the outer surface",
        "At quarter radius from center",
        "Uniformly distributed",
      ],
      correctAnswer: 1,
      subject: "Strength of Materials",
    },
    {
      id: "mech_som_8",
      question: "What is the moment of inertia of a rectangular section about its centroidal axis?",
      options: ["bh³/12", "bh³/3", "bh²/6", "bh³/36"],
      correctAnswer: 0,
      subject: "Strength of Materials",
    },
    {
      id: "mech_som_9",
      question: "Which type of loading causes fatigue failure?",
      options: ["Static loading", "Impact loading", "Repeated/cyclic loading", "Thermal loading"],
      correctAnswer: 2,
      subject: "Strength of Materials",
    },
    {
      id: "mech_som_10",
      question: "What is the critical load for a column according to Euler's formula?",
      options: ["π²EI/L²", "π²EI/(KL)²", "πEI/L²", "2π²EI/L²"],
      correctAnswer: 1,
      subject: "Strength of Materials",
    },
    // Continue with more strength of materials questions...
    ...Array.from({ length: 56 }, (_, i) => ({
      id: `mech_som_${i + 11}`,
      question: `How do you calculate ${["bending stress", "shear stress", "deflection", "buckling load"][i % 4]} in structural members?`,
      options: [
        `Using fundamental mechanics principles and material properties`,
        `Through empirical formulas based on experimental data only`,
        `By applying appropriate beam theory and boundary conditions`,
        `Using both theoretical analysis and practical design considerations`,
      ],
      correctAnswer: 3,
      subject: "Strength of Materials",
    })),
  ],

  electrical: [
    // Electrical Machines Questions (67 questions)
    {
      id: "elec_machines_1",
      question: "What is the principle of operation of a DC motor?",
      options: [
        "Electromagnetic induction",
        "Force on current-carrying conductor in magnetic field",
        "Piezoelectric effect",
        "Thermoelectric effect",
      ],
      correctAnswer: 1,
      subject: "Electrical Machines",
    },
    {
      id: "elec_machines_2",
      question: "In a transformer, the voltage ratio is equal to:",
      options: ["Current ratio", "Power ratio", "Turns ratio", "Frequency ratio"],
      correctAnswer: 2,
      subject: "Electrical Machines",
    },
    {
      id: "elec_machines_3",
      question: "What is the function of commutator in DC machine?",
      options: [
        "To convert AC to DC in generator mode",
        "To convert DC to AC in motor mode",
        "To reverse current direction in armature conductors",
        "To maintain constant voltage output",
      ],
      correctAnswer: 2,
      subject: "Electrical Machines",
    },
    {
      id: "elec_machines_4",
      question: "In a synchronous motor, the rotor speed is:",
      options: [
        "Less than synchronous speed",
        "Greater than synchronous speed",
        "Equal to synchronous speed",
        "Variable with load",
      ],
      correctAnswer: 2,
      subject: "Electrical Machines",
    },
    {
      id: "elec_machines_5",
      question: "What is slip in an induction motor?",
      options: [
        "Difference between synchronous speed and rotor speed",
        "Ratio of rotor speed to synchronous speed",
        "Percentage difference between synchronous and rotor speeds",
        "Angular displacement between stator and rotor fields",
      ],
      correctAnswer: 2,
      subject: "Electrical Machines",
    },
    {
      id: "elec_machines_6",
      question: "Which type of motor is used for variable speed applications?",
      options: ["Synchronous motor", "Squirrel cage induction motor", "DC shunt motor", "Universal motor"],
      correctAnswer: 2,
      subject: "Electrical Machines",
    },
    {
      id: "elec_machines_7",
      question: "What is the purpose of starter in an induction motor?",
      options: [
        "To increase starting torque",
        "To reduce starting current",
        "To improve power factor",
        "To control motor speed",
      ],
      correctAnswer: 1,
      subject: "Electrical Machines",
    },
    {
      id: "elec_machines_8",
      question: "In a transformer, what causes core losses?",
      options: ["Hysteresis and eddy currents", "Copper losses in windings", "Leakage flux", "Load variations"],
      correctAnswer: 0,
      subject: "Electrical Machines",
    },
    {
      id: "elec_machines_9",
      question: "What is back EMF in a DC motor?",
      options: [
        "EMF induced in armature due to rotation",
        "EMF applied to field winding",
        "EMF drop across armature resistance",
        "EMF induced in field winding",
      ],
      correctAnswer: 0,
      subject: "Electrical Machines",
    },
    {
      id: "elec_machines_10",
      question: "Which motor has the highest starting torque?",
      options: ["DC series motor", "DC shunt motor", "Synchronous motor", "Squirrel cage induction motor"],
      correctAnswer: 0,
      subject: "Electrical Machines",
    },
    // Continue with more electrical machines questions...
    ...Array.from({ length: 57 }, (_, i) => ({
      id: `elec_machines_${i + 11}`,
      question: `What determines the ${["efficiency", "torque characteristics", "speed regulation", "power factor"][i % 4]} of electrical machines?`,
      options: [
        `Machine design parameters and operating conditions`,
        `Supply voltage and frequency variations only`,
        `Load characteristics and environmental factors`,
        `All factors including design, supply, load, and operating conditions`,
      ],
      correctAnswer: 3,
      subject: "Electrical Machines",
    })),

    // Network Theory Questions (67 questions)
    {
      id: "elec_network_1",
      question: "What is Kirchhoff's Current Law (KCL)?",
      options: [
        "Sum of voltages in a closed loop is zero",
        "Sum of currents entering a node equals sum of currents leaving",
        "Voltage is proportional to current",
        "Power equals voltage times current",
      ],
      correctAnswer: 1,
      subject: "Network Theory",
    },
    {
      id: "elec_network_2",
      question: "In an RC circuit, what is the time constant?",
      options: ["R/C", "C/R", "RC", "1/(RC)"],
      correctAnswer: 2,
      subject: "Network Theory",
    },
    {
      id: "elec_network_3",
      question: "What is Thevenin's theorem used for?",
      options: [
        "Circuit analysis only",
        "Network simplification",
        "Finding equivalent circuits",
        "Both network simplification and finding equivalent circuits",
      ],
      correctAnswer: 3,
      subject: "Network Theory",
    },
    {
      id: "elec_network_4",
      question: "In a purely inductive circuit, current:",
      options: ["Leads voltage by 90°", "Lags voltage by 90°", "Is in phase with voltage", "Leads voltage by 45°"],
      correctAnswer: 1,
      subject: "Network Theory",
    },
    {
      id: "elec_network_5",
      question: "What is the impedance of a series RLC circuit at resonance?",
      options: ["R + jωL + 1/(jωC)", "R", "jωL", "1/(jωC)"],
      correctAnswer: 1,
      subject: "Network Theory",
    },
    {
      id: "elec_network_6",
      question: "What is Kirchhoff's Voltage Law (KVL)?",
      options: [
        "Sum of currents at a node is zero",
        "Sum of voltage drops in a closed loop equals applied voltage",
        "Voltage across resistor equals current times resistance",
        "Power dissipated equals I²R",
      ],
      correctAnswer: 1,
      subject: "Network Theory",
    },
    {
      id: "elec_network_7",
      question: "What is the power factor of a purely resistive circuit?",
      options: ["0", "0.5", "0.707", "1"],
      correctAnswer: 3,
      subject: "Network Theory",
    },
    {
      id: "elec_network_8",
      question: "In a capacitive circuit, what happens to current when frequency increases?",
      options: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
      correctAnswer: 1,
      subject: "Network Theory",
    },
    {
      id: "elec_network_9",
      question: "What is Norton's theorem equivalent to?",
      options: ["Thevenin's theorem", "Superposition theorem", "Maximum power transfer theorem", "Reciprocity theorem"],
      correctAnswer: 0,
      subject: "Network Theory",
    },
    {
      id: "elec_network_10",
      question: "What is the condition for maximum power transfer?",
      options: [
        "Load resistance equals source resistance",
        "Load resistance is twice source resistance",
        "Load resistance is half of source resistance",
        "Load resistance is infinite",
      ],
      correctAnswer: 0,
      subject: "Network Theory",
    },
    // Continue with more network theory questions...
    ...Array.from({ length: 57 }, (_, i) => ({
      id: `elec_network_${i + 11}`,
      question: `How do you analyze ${["AC circuits", "transient response", "frequency response", "network parameters"][i % 4]} in electrical networks?`,
      options: [
        `Using phasor analysis and complex impedance methods`,
        `Through Laplace transform and s-domain analysis`,
        `By applying network theorems and circuit laws`,
        `Using all mathematical tools and network analysis techniques`,
      ],
      correctAnswer: 3,
      subject: "Network Theory",
    })),

    // Power Systems Questions (66 questions)
    {
      id: "elec_power_1",
      question: "What is the purpose of a circuit breaker in power systems?",
      options: [
        "To regulate voltage levels",
        "To interrupt fault currents safely",
        "To measure electrical power",
        "To store electrical energy",
      ],
      correctAnswer: 1,
      subject: "Power Systems",
    },
    {
      id: "elec_power_2",
      question: "What is the standard frequency of AC power supply in India?",
      options: ["50 Hz", "60 Hz", "25 Hz", "100 Hz"],
      correctAnswer: 0,
      subject: "Power Systems",
    },
    {
      id: "elec_power_3",
      question: "What is the function of a transformer in power transmission?",
      options: [
        "Voltage regulation only",
        "Step up or step down voltage levels",
        "Power factor correction",
        "Frequency conversion",
      ],
      correctAnswer: 1,
      subject: "Power Systems",
    },
    {
      id: "elec_power_4",
      question: "What is the purpose of earthing in electrical systems?",
      options: [
        "To reduce power consumption",
        "To provide safety against electric shock",
        "To improve power factor",
        "To increase system efficiency",
      ],
      correctAnswer: 1,
      subject: "Power Systems",
    },
    {
      id: "elec_power_5",
      question: "What is load factor in power systems?",
      options: [
        "Ratio of maximum demand to connected load",
        "Ratio of average load to maximum demand",
        "Ratio of peak load to average load",
        "Ratio of actual energy to maximum possible energy",
      ],
      correctAnswer: 1,
      subject: "Power Systems",
    },
    {
      id: "elec_power_6",
      question: "What causes power system instability?",
      options: ["Sudden load changes", "Transmission line faults", "Generator outages", "All of the above"],
      correctAnswer: 3,
      subject: "Power Systems",
    },
    {
      id: "elec_power_7",
      question: "What is the purpose of a relay in power systems?",
      options: [
        "To generate electrical power",
        "To detect abnormal conditions and initiate protective action",
        "To regulate voltage levels",
        "To improve power quality",
      ],
      correctAnswer: 1,
      subject: "Power Systems",
    },
    {
      id: "elec_power_8",
      question: "What is diversity factor in electrical installations?",
      options: [
        "Ratio of sum of individual maximum demands to maximum demand of whole system",
        "Ratio of maximum demand to connected load",
        "Ratio of average load to maximum demand",
        "Ratio of actual energy consumed to maximum possible energy",
      ],
      correctAnswer: 0,
      subject: "Power Systems",
    },
    {
      id: "elec_power_9",
      question: "What is the main advantage of HVDC transmission?",
      options: [
        "Lower transmission losses over long distances",
        "Easier voltage regulation",
        "Better power quality",
        "Lower installation cost",
      ],
      correctAnswer: 0,
      subject: "Power Systems",
    },
    {
      id: "elec_power_10",
      question: "What is power factor correction?",
      options: [
        "Increasing real power consumption",
        "Reducing reactive power to improve overall power factor",
        "Increasing voltage levels",
        "Reducing transmission losses",
      ],
      correctAnswer: 1,
      subject: "Power Systems",
    },
    // Continue with more power systems questions...
    ...Array.from({ length: 56 }, (_, i) => ({
      id: `elec_power_${i + 11}`,
      question: `What are the key considerations for ${["power generation", "transmission planning", "distribution systems", "grid stability"][i % 4]} in electrical power systems?`,
      options: [
        `Economic factors and environmental impact`,
        `Technical requirements and safety standards`,
        `Reliability and power quality considerations`,
        `All factors including economic, technical, environmental, and reliability aspects`,
      ],
      correctAnswer: 3,
      subject: "Power Systems",
    })),
  ],

  electronics: [
    // Electronic Devices Questions (67 questions)
    {
      id: "elect_devices_1",
      question: "What is the function of a diode?",
      options: [
        "Amplify electrical signals",
        "Store electrical charge",
        "Allow current flow in one direction only",
        "Generate electrical oscillations",
      ],
      correctAnswer: 2,
      subject: "Electronic Devices",
    },
    {
      id: "elect_devices_2",
      question: "In a BJT, what does the base current control?",
      options: ["Emitter current only", "Collector current primarily", "Base-emitter voltage", "Power dissipation"],
      correctAnswer: 1,
      subject: "Electronic Devices",
    },
    {
      id: "elect_devices_3",
      question: "What is the main advantage of MOSFET over BJT?",
      options: [
        "Higher switching speed only",
        "Lower power consumption only",
        "Higher input impedance only",
        "All of the above advantages",
      ],
      correctAnswer: 3,
      subject: "Electronic Devices",
    },
    {
      id: "elect_devices_4",
      question: "What is the breakdown voltage of a Zener diode used for?",
      options: [
        "Signal amplification",
        "Voltage regulation and reference",
        "High-frequency switching",
        "Power rectification",
      ],
      correctAnswer: 1,
      subject: "Electronic Devices",
    },
    {
      id: "elect_devices_5",
      question: "What is the depletion region in a PN junction?",
      options: [
        "Region with excess electrons",
        "Region with excess holes",
        "Region depleted of mobile charge carriers",
        "Region with maximum current flow",
      ],
      correctAnswer: 2,
      subject: "Electronic Devices",
    },
    {
      id: "elect_devices_6",
      question: "What is the threshold voltage of a MOSFET?",
      options: [
        "Voltage at which drain current starts flowing",
        "Maximum gate-source voltage",
        "Breakdown voltage of gate oxide",
        "Voltage across drain-source terminals",
      ],
      correctAnswer: 0,
      subject: "Electronic Devices",
    },
    {
      id: "elect_devices_7",
      question: "What is the function of a photodiode?",
      options: [
        "Emit light when forward biased",
        "Convert light energy to electrical energy",
        "Amplify optical signals",
        "Generate laser light",
      ],
      correctAnswer: 1,
      subject: "Electronic Devices",
    },
    {
      id: "elect_devices_8",
      question: "What is the current gain (β) of a BJT?",
      options: [
        "Ratio of base current to collector current",
        "Ratio of collector current to base current",
        "Ratio of emitter current to base current",
        "Ratio of collector current to emitter current",
      ],
      correctAnswer: 1,
      subject: "Electronic Devices",
    },
    {
      id: "elect_devices_9",
      question: "What is the main application of a tunnel diode?",
      options: [
        "Power rectification",
        "Voltage regulation",
        "High-frequency oscillation and switching",
        "Light emission",
      ],
      correctAnswer: 2,
      subject: "Electronic Devices",
    },
    {
      id: "elect_devices_10",
      question: "What is the difference between enhancement and depletion mode MOSFETs?",
      options: [
        "Channel material composition",
        "Gate terminal configuration",
        "Presence or absence of channel at zero gate voltage",
        "Drain-source voltage ratings",
      ],
      correctAnswer: 2,
      subject: "Electronic Devices",
    },
    // Continue with more electronic devices questions...
    ...Array.from({ length: 57 }, (_, i) => ({
      id: `elect_devices_${i + 11}`,
      question: `How do ${["semiconductor physics", "PN junctions", "transistor characteristics", "device modeling"][i % 4]} affect electronic device performance?`,
      options: [
        `Through fundamental material properties and doping levels`,
        `By controlling carrier concentration and mobility`,
        `Via temperature effects and manufacturing processes`,
        `All factors including physics, materials, processing, and environmental conditions`,
      ],
      correctAnswer: 3,
      subject: "Electronic Devices",
    })),

    // Circuit Theory Questions (67 questions)
    {
      id: "elect_circuit_1",
      question: "What is the gain of an ideal operational amplifier?",
      options: ["Zero", "Unity (1)", "Infinite", "Depends on frequency"],
      correctAnswer: 2,
      subject: "Circuit Theory",
    },
    {
      id: "elect_circuit_2",
      question: "In a low-pass filter, what happens to high-frequency signals?",
      options: [
        "They are amplified significantly",
        "They are attenuated or reduced",
        "They are phase-shifted by 90° only",
        "They remain completely unchanged",
      ],
      correctAnswer: 1,
      subject: "Circuit Theory",
    },
    {
      id: "elect_circuit_3",
      question: "What is the cutoff frequency of an RC low-pass filter?",
      options: ["1/(2πRC)", "2πRC", "RC", "1/RC"],
      correctAnswer: 0,
      subject: "Circuit Theory",
    },
    {
      id: "elect_circuit_4",
      question: "In negative feedback, the output signal is:",
      options: [
        "Added to the input signal",
        "Subtracted from the input signal",
        "Multiplied with the input signal",
        "Divided by the input signal",
      ],
      correctAnswer: 1,
      subject: "Circuit Theory",
    },
    {
      id: "elect_circuit_5",
      question: "What is the input impedance of an ideal op-amp?",
      options: ["Zero", "Very low", "Infinite", "50 ohms"],
      correctAnswer: 2,
      subject: "Circuit Theory",
    },
    {
      id: "elect_circuit_6",
      question: "What is the bandwidth of an amplifier?",
      options: [
        "Maximum frequency it can handle",
        "Range of frequencies with acceptable gain",
        "Minimum frequency response",
        "Total power consumption",
      ],
      correctAnswer: 1,
      subject: "Circuit Theory",
    },
    {
      id: "elect_circuit_7",
      question: "What is the purpose of a coupling capacitor?",
      options: [
        "Block DC and pass AC signals",
        "Block AC and pass DC signals",
        "Provide power supply filtering",
        "Generate oscillations",
      ],
      correctAnswer: 0,
      subject: "Circuit Theory",
    },
    {
      id: "elect_circuit_8",
      question: "What is the gain-bandwidth product of an op-amp?",
      options: [
        "Variable with frequency",
        "Constant for a given op-amp",
        "Always equal to unity",
        "Depends on supply voltage",
      ],
      correctAnswer: 1,
      subject: "Circuit Theory",
    },
    {
      id: "elect_circuit_9",
      question: "What is the function of a bypass capacitor?",
      options: [
        "Couple AC signals between stages",
        "Provide DC path for biasing",
        "Bypass AC signals around a component",
        "Store energy for power supply",
      ],
      correctAnswer: 2,
      subject: "Circuit Theory",
    },
    {
      id: "elect_circuit_10",
      question: "What is the slew rate of an operational amplifier?",
      options: [
        "Maximum rate of change of output voltage",
        "Maximum input voltage swing",
        "Maximum power dissipation rate",
        "Maximum frequency of operation",
      ],
      correctAnswer: 0,
      subject: "Circuit Theory",
    },
    // Continue with more circuit theory questions...
    ...Array.from({ length: 57 }, (_, i) => ({
      id: `elect_circuit_${i + 11}`,
      question: `How do you analyze ${["frequency response", "stability", "noise performance", "distortion"][i % 4]} in electronic circuits?`,
      options: [
        `Using mathematical models and simulation tools`,
        `Through experimental measurements and testing`,
        `By applying circuit analysis techniques and design principles`,
        `Using comprehensive analysis including theory, simulation, and practical verification`,
      ],
      correctAnswer: 3,
      subject: "Circuit Theory",
    })),

    // Digital Electronics Questions (66 questions)
    {
      id: "elect_digital_1",
      question: "How many input combinations does a 3-input AND gate have?",
      options: ["3", "6", "8", "9"],
      correctAnswer: 2,
      subject: "Digital Electronics",
    },
    {
      id: "elect_digital_2",
      question: "What is the output of an XOR gate when both inputs are the same?",
      options: ["0 (Low)", "1 (High)", "Undefined", "Depends on the inputs"],
      correctAnswer: 0,
      subject: "Digital Electronics",
    },
    {
      id: "elect_digital_3",
      question: "How many flip-flops are needed to count up to 16?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2,
      subject: "Digital Electronics",
    },
    {
      id: "elect_digital_4",
      question: "What is the decimal equivalent of binary 1101?",
      options: ["11", "12", "13", "14"],
      correctAnswer: 2,
      subject: "Digital Electronics",
    },
    {
      id: "elect_digital_5",
      question: "What is the main difference between combinational and sequential circuits?",
      options: [
        "Power consumption levels",
        "Number of input terminals",
        "Presence or absence of memory elements",
        "Operating voltage requirements",
      ],
      correctAnswer: 2,
      subject: "Digital Electronics",
    },
    {
      id: "elect_digital_6",
      question: "What is a multiplexer (MUX)?",
      options: [
        "A device that combines multiple signals into one",
        "A device that selects one input from many based on control signals",
        "A device that amplifies digital signals",
        "A device that converts analog to digital",
      ],
      correctAnswer: 1,
      subject: "Digital Electronics",
    },
    {
      id: "elect_digital_7",
      question: "What is the function of a decoder?",
      options: [
        "Encode multiple inputs to fewer outputs",
        "Convert binary to decimal",
        "Select one output line based on binary input code",
        "Amplify digital signals",
      ],
      correctAnswer: 2,
      subject: "Digital Electronics",
    },
    {
      id: "elect_digital_8",
      question: "What is the difference between a latch and a flip-flop?",
      options: [
        "Power consumption",
        "Number of inputs",
        "Clock sensitivity (level vs edge triggered)",
        "Output voltage levels",
      ],
      correctAnswer: 2,
      subject: "Digital Electronics",
    },
    {
      id: "elect_digital_9",
      question: "What is the hexadecimal equivalent of binary 10110101?",
      options: ["B5", "A5", "C5", "D5"],
      correctAnswer: 0,
      subject: "Digital Electronics",
    },
    {
      id: "elect_digital_10",
      question: "What is the purpose of a clock signal in digital systems?",
      options: [
        "Provide power to the circuit",
        "Synchronize operations and data transfers",
        "Amplify digital signals",
        "Convert between logic levels",
      ],
      correctAnswer: 1,
      subject: "Digital Electronics",
    },
    // Continue with more digital electronics questions...
    ...Array.from({ length: 56 }, (_, i) => ({
      id: `elect_digital_${i + 11}`,
      question: `How do ${["logic gates", "memory systems", "microprocessors", "digital signal processing"][i % 4]} function in digital electronic systems?`,
      options: [
        `Through binary logic operations and Boolean algebra`,
        `Using sequential and combinational logic principles`,
        `Via clocked synchronous and asynchronous operations`,
        `All digital principles including logic, timing, and system architecture`,
      ],
      correctAnswer: 3,
      subject: "Digital Electronics",
    })),
  ],

  civil: [
    // Building Materials Questions (67 questions)
    {
      id: "civil_materials_1",
      question: "What is the typical compressive strength of M20 grade concrete?",
      options: ["15 MPa", "20 MPa", "25 MPa", "30 MPa"],
      correctAnswer: 1,
      subject: "Building Materials",
    },
    {
      id: "civil_materials_2",
      question: "What is the main binding agent in Portland cement?",
      options: [
        "Tricalcium silicate (C3S)",
        "Dicalcium silicate (C2S)",
        "Tricalcium aluminate (C3A)",
        "Tetracalcium aluminoferrite (C4AF)",
      ],
      correctAnswer: 0,
      subject: "Building Materials",
    },
    {
      id: "civil_materials_3",
      question: "What is the ideal water-cement ratio for normal concrete?",
      options: ["0.3-0.4", "0.4-0.6", "0.6-0.8", "0.8-1.0"],
      correctAnswer: 1,
      subject: "Building Materials",
    },
    {
      id: "civil_materials_4",
      question: "Which test is used to determine the workability of fresh concrete?",
      options: ["Compression test", "Slump test", "Tensile test", "Flexural test"],
      correctAnswer: 1,
      subject: "Building Materials",
    },
    {
      id: "civil_materials_5",
      question: "What is the standard size of a modular brick in India?",
      options: ["190 × 90 × 90 mm", "200 × 100 × 100 mm", "230 × 110 × 70 mm", "250 × 120 × 80 mm"],
      correctAnswer: 0,
      subject: "Building Materials",
    },
    {
      id: "civil_materials_6",
      question: "What is the purpose of curing in concrete?",
      options: [
        "To increase workability",
        "To maintain moisture for proper hydration",
        "To reduce setting time",
        "To improve color appearance",
      ],
      correctAnswer: 1,
      subject: "Building Materials",
    },
    {
      id: "civil_materials_7",
      question: "What is the specific gravity of cement?",
      options: ["2.5-2.7", "3.1-3.16", "2.0-2.3", "3.5-4.0"],
      correctAnswer: 1,
      subject: "Building Materials",
    },
    {
      id: "civil_materials_8",
      question: "Which type of steel is commonly used in RCC construction?",
      options: ["Mild steel", "High carbon steel", "High tensile steel", "Stainless steel"],
      correctAnswer: 2,
      subject: "Building Materials",
    },
    {
      id: "civil_materials_9",
      question: "What is the fineness modulus of fine aggregate typically?",
      options: ["1.5-2.5", "2.3-3.1", "3.5-4.5", "5.0-6.0"],
      correctAnswer: 1,
      subject: "Building Materials",
    },
    {
      id: "civil_materials_10",
      question: "What is the main advantage of using fly ash in concrete?",
      options: [
        "Increases early strength",
        "Improves workability and reduces permeability",
        "Reduces cost only",
        "Changes concrete color",
      ],
      correctAnswer: 1,
      subject: "Building Materials",
    },
    // Continue with more building materials questions...
    ...Array.from({ length: 57 }, (_, i) => ({
      id: `civil_materials_${i + 11}`,
      question: `What are the key properties of ${["concrete", "steel", "timber", "masonry"][i % 4]} as construction materials?`,
      options: [
        `Strength, durability, and workability characteristics`,
        `Chemical composition and manufacturing processes`,
        `Cost, availability, and environmental impact`,
        `All properties including mechanical, physical, chemical, and economic factors`,
      ],
      correctAnswer: 3,
      subject: "Building Materials",
    })),

    // Surveying Questions (67 questions)
    {
      id: "civil_survey_1",
      question: "What is the primary purpose of leveling in surveying?",
      options: [
        "Measure horizontal distances accurately",
        "Measure vertical distances between points",
        "Measure horizontal angles precisely",
        "Determine relative elevations of points",
      ],
      correctAnswer: 3,
      subject: "Surveying",
    },
    {
      id: "civil_survey_2",
      question: "Which instrument is primarily used for measuring horizontal angles?",
      options: ["Dumpy level", "Theodolite", "Measuring chain", "Prismatic compass"],
      correctAnswer: 1,
      subject: "Surveying",
    },
    {
      id: "civil_survey_3",
      question: "What is the standard length of a surveyor's chain?",
      options: ["20 meters", "30 meters", "50 meters", "100 meters"],
      correctAnswer: 0,
      subject: "Surveying",
    },
    {
      id: "civil_survey_4",
      question: "What is the fundamental principle of plane table surveying?",
      options: [
        "Triangulation method",
        "Traverse surveying",
        "Plotting survey work directly in the field",
        "Precise leveling operations",
      ],
      correctAnswer: 2,
      subject: "Surveying",
    },
    {
      id: "civil_survey_5",
      question: "What is the least count of a vernier theodolite?",
      options: ["1 minute", "20 seconds", "10 seconds", "5 seconds"],
      correctAnswer: 1,
      subject: "Surveying",
    },
    {
      id: "civil_survey_6",
      question: "What is the purpose of a benchmark in surveying?",
      options: [
        "Mark property boundaries",
        "Provide reference point for elevation measurements",
        "Indicate magnetic north direction",
        "Mark center line of roads",
      ],
      correctAnswer: 1,
      subject: "Surveying",
    },
    {
      id: "civil_survey_7",
      question: "What is the maximum slope that can be measured with a chain?",
      options: ["1 in 10", "1 in 20", "1 in 30", "1 in 40"],
      correctAnswer: 1,
      subject: "Surveying",
    },
    {
      id: "civil_survey_8",
      question: "What is the principle of EDM (Electronic Distance Measurement)?",
      options: [
        "Mechanical measurement",
        "Optical measurement using light waves",
        "Electromagnetic wave measurement",
        "Sound wave measurement",
      ],
      correctAnswer: 2,
      subject: "Surveying",
    },
    {
      id: "civil_survey_9",
      question: "What is the purpose of balancing a traverse?",
      options: [
        "Check instrument accuracy",
        "Distribute errors and close the traverse",
        "Measure precise angles",
        "Calculate areas accurately",
      ],
      correctAnswer: 1,
      subject: "Surveying",
    },
    {
      id: "civil_survey_10",
      question: "What is the difference between true bearing and magnetic bearing?",
      options: [
        "True bearing is measured from true north, magnetic bearing from magnetic north",
        "No difference between them",
        "True bearing is more accurate",
        "Magnetic bearing includes declination correction",
      ],
      correctAnswer: 0,
      subject: "Surveying",
    },
    // Continue with more surveying questions...
    ...Array.from({ length: 57 }, (_, i) => ({
      id: `civil_survey_${i + 11}`,
      question: `How do you perform ${["triangulation", "traverse surveying", "contouring", "GPS surveying"][i % 4]} in modern surveying practice?`,
      options: [
        `Using traditional instruments and manual calculations`,
        `Through electronic instruments and computer processing`,
        `By combining field measurements with digital mapping`,
        `Using integrated approach with modern technology and established principles`,
      ],
      correctAnswer: 3,
      subject: "Surveying",
    })),

    // Fluid Mechanics Questions (66 questions)
    {
      id: "civil_fluid_1",
      question: "What is Bernoulli's equation fundamentally based on?",
      options: [
        "Conservation of mass principle",
        "Conservation of energy principle",
        "Conservation of momentum principle",
        "Newton's second law of motion",
      ],
      correctAnswer: 1,
      subject: "Fluid Mechanics",
    },
    {
      id: "civil_fluid_2",
      question: "What does the continuity equation in fluid mechanics state?",
      options: [
        "A₁V₁ = A₂V₂ for incompressible flow",
        "P₁ + ρgh₁ = P₂ + ρgh₂",
        "F = ma for fluid particles",
        "τ = μ(du/dy) for viscous flow",
      ],
      correctAnswer: 0,
      subject: "Fluid Mechanics",
    },
    {
      id: "civil_fluid_3",
      question: "What is the SI unit of dynamic viscosity?",
      options: ["Pa·s (Pascal-second)", "m²/s", "kg/m³", "N/m²"],
      correctAnswer: 0,
      subject: "Fluid Mechanics",
    },
    {
      id: "civil_fluid_4",
      question: "What type of flow occurs when Reynolds number is less than 2000?",
      options: ["Turbulent flow", "Laminar flow", "Transitional flow", "Unsteady flow"],
      correctAnswer: 1,
      subject: "Fluid Mechanics",
    },
    {
      id: "civil_fluid_5",
      question: "What is the hydraulic radius of a circular pipe flowing full?",
      options: ["D/2", "D/4", "D/8", "D"],
      correctAnswer: 1,
      subject: "Fluid Mechanics",
    },
    {
      id: "civil_fluid_6",
      question: "What is the center of pressure?",
      options: [
        "Center of gravity of the submerged surface",
        "Point where total hydrostatic force acts",
        "Centroid of the pressure distribution",
        "Point of maximum pressure",
      ],
      correctAnswer: 1,
      subject: "Fluid Mechanics",
    },
    {
      id: "civil_fluid_7",
      question: "What is the Darcy-Weisbach equation used for?",
      options: [
        "Calculate pressure in static fluids",
        "Determine head loss due to friction in pipes",
        "Find velocity in open channels",
        "Calculate buoyant force",
      ],
      correctAnswer: 1,
      subject: "Fluid Mechanics",
    },
    {
      id: "civil_fluid_8",
      question: "What is the specific weight of water at standard conditions?",
      options: ["1000 N/m³", "9810 N/m³", "1000 kg/m³", "9.81 N/m³"],
      correctAnswer: 1,
      subject: "Fluid Mechanics",
    },
    {
      id: "civil_fluid_9",
      question: "What is the Manning's equation used for?",
      options: [
        "Pipe flow calculations",
        "Open channel flow calculations",
        "Pump performance analysis",
        "Pressure vessel design",
      ],
      correctAnswer: 1,
      subject: "Fluid Mechanics",
    },
    {
      id: "civil_fluid_10",
      question: "What is cavitation in fluid flow?",
      options: [
        "Formation of vapor bubbles due to low pressure",
        "Excessive turbulence in flow",
        "Separation of flow from boundaries",
        "Increase in fluid temperature",
      ],
      correctAnswer: 0,
      subject: "Fluid Mechanics",
    },
    // Continue with more fluid mechanics questions...
    ...Array.from({ length: 56 }, (_, i) => ({
      id: `civil_fluid_${i + 11}`,
      question: `How do ${["pressure distribution", "flow measurement", "pump systems", "open channel hydraulics"][i % 4]} work in fluid mechanics applications?`,
      options: [
        `Through fundamental fluid properties and flow principles`,
        `Using empirical relationships and experimental data`,
        `By applying conservation laws and dimensional analysis`,
        `Through comprehensive analysis combining theory, experiments, and practical applications`,
      ],
      correctAnswer: 3,
      subject: "Fluid Mechanics",
    })),
  ],
}

// Initialize quiz
document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in
  const userData = localStorage.getItem("currentUser")
  if (!userData) {
    window.location.href = "index.html"
    return
  }

  currentUser = JSON.parse(userData)
  loadQuestions()
})

function loadQuestions() {
  // Get questions for user's department
  const departmentQuestions = questionBank[currentUser.department] || []

  if (departmentQuestions.length === 0) {
    showError("No questions available for your department.")
    return
  }

  // Shuffle questions using Fisher-Yates algorithm
  const shuffled = [...departmentQuestions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Select 50 questions
  questions = shuffled.slice(0, 50)

  // Hide loading and show quiz
  document.getElementById("loadingState").style.display = "none"
  document.getElementById("quizContent").style.display = "block"

  // Initialize quiz
  initializeQuiz()
  startTimer()
}

function initializeQuiz() {
  // Update total questions
  document.getElementById("totalQuestions").textContent = questions.length
  document.getElementById("totalCount").textContent = questions.length

  // Create question navigation grid
  createQuestionGrid()

  // Load first question
  loadQuestion(0)
}

function createQuestionGrid() {
  const grid = document.getElementById("questionGrid")
  grid.innerHTML = ""

  for (let i = 0; i < questions.length; i++) {
    const button = document.createElement("button")
    button.className = "question-number"
    button.textContent = i + 1
    button.onclick = () => goToQuestion(i)
    grid.appendChild(button)
  }

  updateQuestionGrid()
}

function loadQuestion(index) {
  if (index < 0 || index >= questions.length) return

  currentQuestionIndex = index
  const question = questions[index]

  // Update question content
  document.getElementById("questionText").textContent = question.question
  document.getElementById("questionSubject").textContent = question.subject

  // Create options
  const optionsContainer = document.getElementById("questionOptions")
  optionsContainer.innerHTML = ""

  question.options.forEach((option, optionIndex) => {
    const optionDiv = document.createElement("div")
    optionDiv.className = "option-item"
    if (answers[index] === optionIndex) {
      optionDiv.classList.add("selected")
    }

    optionDiv.innerHTML = `
            <div class="option-radio"></div>
            <div class="option-text">${option}</div>
        `

    optionDiv.onclick = () => selectAnswer(index, optionIndex)
    optionsContainer.appendChild(optionDiv)
  })

  // Update progress
  updateProgress()
  updateNavigation()
  updateQuestionGrid()

  // Add animation
  document.querySelector(".question-card").classList.add("question-fade-in")
  setTimeout(() => {
    document.querySelector(".question-card").classList.remove("question-fade-in")
  }, 300)
}

function selectAnswer(questionIndex, answerIndex) {
  answers[questionIndex] = answerIndex

  // Update option styling
  document.querySelectorAll(".option-item").forEach((item, index) => {
    if (index === answerIndex) {
      item.classList.add("selected")
    } else {
      item.classList.remove("selected")
    }
  })

  updateAnsweredCount()
  updateQuestionGrid()
}

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100
  document.getElementById("progressFill").style.width = progress + "%"
  document.getElementById("currentQuestion").textContent = currentQuestionIndex + 1
  document.getElementById("progressPercentage").textContent = Math.round(progress) + "% Complete"
}

function updateNavigation() {
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  prevBtn.disabled = currentQuestionIndex === 0

  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.textContent = "Submit Quiz"
    nextBtn.innerHTML = "Submit Quiz"
    nextBtn.onclick = submitQuiz
  } else {
    nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>'
    nextBtn.onclick = nextQuestion
  }
}

function updateAnsweredCount() {
  const answeredCount = Object.keys(answers).length
  document.getElementById("answeredCount").textContent = answeredCount
}

function updateQuestionGrid() {
  const buttons = document.querySelectorAll(".question-number")
  buttons.forEach((button, index) => {
    button.classList.remove("current", "answered")

    if (index === currentQuestionIndex) {
      button.classList.add("current")
    }

    if (answers.hasOwnProperty(index)) {
      button.classList.add("answered")
    }
  })
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    loadQuestion(currentQuestionIndex + 1)
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    loadQuestion(currentQuestionIndex - 1)
  }
}

function goToQuestion(index) {
  loadQuestion(index)
}

function startTimer() {
  updateTimerDisplay()

  timerInterval = setInterval(() => {
    timeLeft--
    updateTimerDisplay()

    if (timeLeft <= 0) {
      clearInterval(timerInterval)
      submitQuiz()
    }
  }, 1000)
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const display = `${minutes}:${seconds.toString().padStart(2, "0")}`

  document.getElementById("timeDisplay").textContent = display

  // Add warning classes
  const timer = document.querySelector(".timer")
  timer.classList.remove("warning", "danger")

  if (timeLeft <= 300) {
    // 5 minutes
    timer.classList.add("danger")
  } else if (timeLeft <= 600) {
    // 10 minutes
    timer.classList.add("warning")
  }
}

function submitQuiz() {
  // Update final counts in modal
  const answeredCount = Object.keys(answers).length
  document.getElementById("finalAnsweredCount").textContent = answeredCount
  document.getElementById("finalTotalCount").textContent = questions.length

  // Show confirmation modal
  document.getElementById("submitModal").style.display = "block"
}

function closeSubmitModal() {
  document.getElementById("submitModal").style.display = "none"
}

function confirmSubmit() {
  // Stop timer
  if (timerInterval) {
    clearInterval(timerInterval)
  }

  // Calculate score
  let score = 0
  questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      score++
    }
  })

  const percentage = Math.round((score / questions.length) * 100)

  // Create result object
  const result = {
    id: Date.now().toString(),
    userId: currentUser.id,
    score: score,
    totalQuestions: questions.length,
    percentage: percentage,
    completedAt: new Date().toISOString(),
    answers: answers,
    questions: questions,
  }

  // Save result
  const allResults = JSON.parse(localStorage.getItem("quizResults") || "[]")
  allResults.push(result)
  localStorage.setItem("quizResults", JSON.stringify(allResults))

  // Redirect to results page
  localStorage.setItem("currentResult", JSON.stringify(result))
  window.location.href = `result.html?resultId=${result.id}`
}

function showError(message) {
  document.getElementById("loadingState").innerHTML = `
        <div class="error-state">
            <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: #ef4444; margin-bottom: 1rem;"></i>
            <p style="font-size: 1.25rem; color: #6b7280; margin-bottom: 2rem;">${message}</p>
            <button class="btn btn-primary" onclick="window.location.href='dashboard.html'">
                Back to Dashboard
            </button>
        </div>
    `
}

// Handle page unload
window.addEventListener("beforeunload", (e) => {
  if (questions.length > 0 && Object.keys(answers).length > 0) {
    e.preventDefault()
    e.returnValue = ""
  }
})
