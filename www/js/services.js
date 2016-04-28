angular.module('starter.services', [])

.factory('Tips', function() {
  // Might use a resource here that returns a JSON array

  var tips = [{
    id: 0,
    name: 'Allergies',
    symptoms: "Look for the following symptoms: the person may develop a rash, itchiness or swelling on his hands, feet or face. His breathing may slow down. Vomiting and diarrhea can also occur.",
    instructions: {
      1: "If he is anaphylaxic (breathing problems, shock or change in mental status) and has an auto-injector/Epi-pen, help him to use it first then all 995",
      2: "Keep giving him reassurance until the ambulance arrives"
    },
    icon: 'ion-allergies',
    image1: 'img/appimages/allergies1.png',
    image2: 'img/appimages/allergies2.png'
  }, {
    id: 1,
    name: 'Asthma',
    symptoms: "Look for the following symptoms: difficulty breathing, chest pain, cough and wheezing",
    instructions: {
      1: "Help the person sit comfortably", 
      2: "Help him take his medication.", 
      3: "Reassure the person.", 
      4: "If his condition worsens, he does not have medication or his condition does not get better with medication, call 995"
    },
    icon: 'ion-asthma',
    image1: 'img/appimages/asthma1.png',
    image2: 'img/appimages/asthma2.png'
  }, {
    id: 2,
    name: 'Bleeding',
    symptoms: "Look for the following symptoms: moderate to large amount of blood",
    instructions: {
      1: "Put pressure on the wound with anything to stop or slow down the blood outflow", 
      2: "Keep pressure on the wound until help arrives", 
      3: "If bleeding is too sever, get someone to call 995 while you continue to put pressure on the wound"
    },
    icon: 'ion-bleeding',
    image1: 'img/appimages/bleeding1.png',
    image2: 'img/appimages/bleeding2.png'
  }, {
    id: 3,
    name: 'Burns',
    symptoms: "Look for the following symptoms: a feeling of minor discomfort to a life-threatening emergency, depending on the size and degree of burn",
    instructions: {
      1: "Cool the burn under cool running water for at least 15 minutes to reduce pain, swelling and risk of scarring", 
      2: "If the burn needs further medical care, loosely cover it with a clean dressing to prevent infection", 
      3: "Call 995 especially if the burn affects more than one area of the body"
    },
    icon: 'ion-burns',
    image1: 'img/appimages/burns1.png',
    image2: 'img/appimages/burns2.png'
  }, {
    id: 4,
    name: 'Cardiac Arrest',
    symptoms: "Look for the following symptoms: sudden loss of responsiveness (no response to tapping on shoulders, does nothing when you ask if he is okay), no pulse",
    instructions: {
      1: "Call 995 or get someone to do it",
      2: "Check his breathing. If he is not breathing or is gasping perform CPR. Push hard and push fast on his chest – at the rate of 100 to 120 compressions a minute. If you have been trained in CPR, check the person’s airway and deliver rescue breaths after every 30 compressions.",
      3: "If you have not been trained, just continue chest compressions. Allow the chest to rise completely between compressions. Keep doing until a portable defibrillator is available (and follow the instructions) or emergency personnel arrive"
    },
    extrainstructions: {      
      1: "CPR step-by-step: ",
      2: "Open airway and give 2 rescue breaths",
      3: "Compress chest 30 times",
      4: "Give 2 rescue breaths",
      5: "Compress chest 30 times",
      6: "Continue cycles of 2 breaths and 30 compressions"
    },
    icon: 'ion-cardiacarrest',
    image1: 'img/appimages/cardiacarrest1.png',
    image2: 'img/appimages/cardiacarrest2.png'
  }, {
    id: 5,
    name: 'Choking',
    symptoms: "Look for the following symptoms: inability to breathe or talk. There may be accompanying cough. In severe cases, the skin may turn blue",
    instructions: {
      1: "Hit him firmly on his back between the shoulder blades 5 times to dislodge the object, followerd by 5 quick abdominal thrusts", 
      2: "Call 995 or get someone to do it when someone is choking"
    },
    extrainstructions: {
      1: "How to do abdominal thrusts: ",
      2: "Lean the person forward slightly and stand behind him.",
      3: "Make a fist with one hand.",
      4: "Put your arms around the person and grasp your fist with your other hand near the top of the stomach, just below the center of the ribcage.",
      5: "Make a quick hand movement, inward and upward"
    },
    icon: 'ion-choking',
    image1: 'img/appimages/choking1.png',
    image2: 'img/appimages/choking2.png'
  }, {
    id: 6,
    name: 'Concussion',
    symptoms: "Look for the following symptoms: headache, confusion, lack of coordination, memory loss, nausea, vomiting, dizziness, ringing in the ears, sleepiness and excessive fatigue",
    instructions: {
      1: "Ask the person to rest and apply a cold compress to the injury (e.g. ice pack, back of frozen vegetables wrapped in a towel)", 
      2: "If he becomes confused, drowsy, vomit or if the fall was greater than 2 times his height, call 995 immediately or get someone to do it", 
      3: "If he has signs and/or symptoms of concussion (dizziness, loss of consciousness, headache, confusion, feeling sick, blurred vision, no memory of what happened), he should stop participation in sports, rest and be seen by a medical professional experienced at assessing concussion"
    },
    icon: 'ion-concussion',
    image1: 'img/appimages/concussion1.png',
    image2: 'img/appimages/concussion2.png'
  }, {
    id: 7,
    name: 'Diabetic',
    symptoms: "Look for the following symptoms: excessive thirst or urination, fatigue, or blurred vision",
    instructions: {
      1: "Give the person something containing sugar. Examples are glucose tablets, candies that can be chewed, fruit juice and milk",
      2: "Reassure him. Call 995 if in doubt or he does not improve, has trouble breathing or lose consciousness"
  },
    icon: 'ion-diabetic',
    image1: 'img/appimages/diabetic1.png',
    image2: 'img/appimages/diabetic2.png'
  }, {
    id: 8,
    name: 'Epilepsy',
    symptoms: "Look for the following symptoms: the person experiences abnormal behavior, symptoms and sensations, muscle spasms, sometimes including a loss of consciousness",
    instructions: {
      1: "Do not restrain him but out a blanket or clothing next to his head, but not under it, to protect him from injury. Placing under his head may compromise airway",
      2: "After the seizure, roll him to his side with his head tilted back to ensure that he keeps breathing and any fluids can drain form his mouth"
    },
    icon: 'ion-epilepsy',
    image1: 'img/appimages/epilepsy1.png',
    image2: 'img/appimages/epilepsy2.png'
  }, {
    id: 9,
    name: 'Fractures',
    symptoms: "Look for the following symptoms: mainly pain. There may also be loss of functionality depending on the area affected",
    instructions: {
      1: "Encourage the person to support the injury with his hand, or use a cushion or items of clothing to prevent unnecessary movement", 
      2: "If the injured area is obviously deformed, significantly painful or needed for transport, call 995 or get someone else to do it", 
      3: "Make sure that the injury is supported until medical help arrives"
    },
    icon: 'ion-fractures',
    image1: 'img/appimages/fractures1.png',
    image2: 'img/appimages/fractures2.png'
  }, {
    id: 10,
    name: 'Heart Attack',
    symptoms: "Look for the following symptoms: the person may have persistent chest pain, pressure or squeezing or isolated unexplained discomfort in arms, neck, jaw, back, or stomach",
    instructions: {
      1: "Call 995 as soon as possible", 
      2: "Give him aspirin, only give it if the person is responsive, able to chew and swallow, and is allowed to have aspirin", 
      3: "Ensure that he is in a comfortable position (e.g. sit him on the floor, leaning against a wall or chair)", 
      4: "Give him constant reassurance while waiting for ambulance to arrive"
    },
    icon: 'ion-heartattack',
    image1: 'img/appimages/heartattack1.png',
    image2: 'img/appimages/heartattack2.png'
  }, {
    id: 11,
    name: 'Heatstroke',
    symptoms: "Look for the following symptoms: the person’s skin may be hot and wet or dry; they may be experiencing changes in mental status, as well as vomiting and a high body temperature",
    instructions: {
      1: "Call 995 as soon as possible, or get someone to do it",
      2: "Remove or loosen tight clothing and begin to rapidly cool the body. Cold-water immersion is the fastest and recommended cooling method, but cold water dousing (ie. Shower) and wet ice towel rotation may be used until medical help arrives",
      3: "If the person is responsive, give him small amounts of cool water to drink slowly"
    },
    icon: 'ion-heatstroke',
    image1: 'img/appimages/heatstroke1.png',
    image2: 'img/appimages/heatstroke2.png'
  }, {
    id: 12,
    name: 'Hypothermia',
    symptoms: "Look for the following symptoms: shivering, dizziness, nausea, rapid breathing, coordination difficulties, problems speaking",
    instructions: {
      1: "The environment is usually cold but a person can develop hypothermia in a warm environment too. He may be shivering, pale and cold to touch",
      2: "Call 995 as soon as possible, or get someone to do it",
      3: "Slowly warm the person by wrapping him in a blanked and giving warm drinks. Keep giving him constant reassurance"
    },
    icon: 'ion-hypothermia',
    image1: 'img/appimages/hypothermia1.png',
    image2: 'img/appimages/hypothermia2.png'
  }, {
    id: 13,
    name: 'Insect Bites',
    symptoms: "Look for the following symptoms: someone who has been bitten or stung will feel pain. Check for a bite mark or stinger and any swelling and/or bleeding. Some bites can trigger a life-threatening allergic reaction that requires emergency care. Breathing difficulty, facial swelling, dizziness, confusion and hives are symptoms of such a reaction.",
    instructions: {
      1: "Remove the stinger by scraping it away with a flat surface, such as a credit card",
      2: "Otherwise, carefully remove it with tweezers, being sure to grab the base of the stinger to avoid squeezing the venom sac", 
      3: "Wash wound with soap and water, cover with a dressing, then apply ice",
      4: "Call 995 if the person seems to have an allergic or anaphylaxic reaction. Signs include a rash, itchiness, swelling on his hands, feet or face or a slowing down of his breathing"
    },
    icon: 'ion-insectbites',
    image1: 'img/appimages/insectbites1.png',
    image2: 'img/appimages/insectbites2.png'
  }, {
    id: 14,
    name: 'Poisoning',
    symptoms: "Look for the following symptoms: cramping, nausea, vomiting or diarrhea",
    instructions: {
      1: "Establish what he has taken, when and how much",
      2: "Call the poison control. Call 995 if he becomes unresponsive, has a change in behavior, has breathing difficulties or if you think he is suicidal",
      3: "Do not make him sick or give him anything to drink unless instructed by poison control"
    },
    icon: 'ion-poisoning',
    image1: 'img/appimages/poisoning1.png',
    image2: 'img/appimages/poisoning2.png'
  }, {
    id: 15,
    name: 'Sprain',
    symptoms: "Look for the following symptoms: pain, swelling, and reduced range of motion",
    instructions: {
      1: "Remember RICE: Rest, Immobilize, Cold, Elevate",
      2: "Rest: Limit the use of injured body part",
      3: "Immobilize: Stabilize the injured area in the position it was found",
      4: "Cold: Apply an ice pack to the injury to reduce swelling and pain",
      5: "Elevate: Elevate the injured part only if it does not cause pain any more"
    },
    icon: 'ion-sprain',
    image1: 'img/appimages/sprain1.png',
    image2: 'img/appimages/sprain2.png'
  }, {
    id: 16,
    name: 'Stroke',
    symptoms: "Weakness on one side of the face, unable to raise both arms, slurring speech",
    instructions: {
      1: "Immediately call 995 or get someone to do it. Keep reassuring the person until ambulance arrives"
    },
    icon: 'ion-stroke',
    image1: 'img/appimages/stroke1.png',
    image2: 'img/appimages/stroke2.png'
  }];

  return {
    all: function() {
      return tips;
    },
    remove: function(tip) {
      tips.splice(tips.indexOf(tip), 1);
    },
    get: function(tipId) {
      for (var i = 0; i < tips.length; i++) {
        if (tips[i].id === parseInt(tipId)) {
          return tips[i];
        }
      }
      return null;
    }
  };
});
