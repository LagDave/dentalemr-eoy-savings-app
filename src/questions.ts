export default [
  {
    question: "What's your motivation to explore DentalEMR?",
    choices: [
      {
        label: "My needs aren't being met",
        value: "My needs aren't being met",
      },
      { label: "I'm tired of my server", value: "I'm tired of my server" },
      {
        label: "I'm spending too much money",
        value: "I'm spending too much money",
      },
      { label: "Sheer curiosity", value: "Sheer curiosity" },
    ],
  },
  {
    question: "What's your main goal for your Endo Practice?",
    choices: [
      {
        label: "Generate more revenue in less time",
        value: "Generate more revenue in less time",
      },
      {
        label: "Reduce my costs and risks",
        value: "Reduce my costs and risks",
      },
      {
        label: "Provide the best patient care",
        value: "Provide the best patient care",
      },
      { label: "All three", value: "All three" },
    ],
  },
  {
    question: "What is most important to you in Endo PMS?",
    choices: [
      {
        label: "Efficient workflows and ROI",
        value: "Efficient workflows and ROI",
      },
      { label: "Low cost", value: "Low cost" },
      { label: "Ease of use", value: "Ease of use" },
      { label: "Access to support", value: "Access to support" },
    ],
  },
  {
    question: "How important is HIPAA security to you?",
    choices: [
      { label: "It's all I think about", value: "It's all I think about" },
      { label: "I have some concerns", value: "I have some concerns" },
      {
        label: "I worry, but don't know what to do",
        value: "I worry, but don't know what to do",
      },
      {
        label: "My IT team takes care of all of that",
        value: "My IT team takes care of all of that",
      },
    ],
  },
  {
    question: "What's your current software setup?",
    inline: true,
    choices: [
      {
        label: "Unsure",
        value: "Unsure",
        imageSrc: "https://dentalemr.com/wp-content/uploads/2024/04/Unsure.png",
      },
      {
        label: "Server",
        value: "Server",
        imageSrc: "https://dentalemr.com/wp-content/uploads/2024/04/Server.png",
      },
      {
        label: "Server w/ cloud",
        value: "Server w/ cloud",
        imageSrc:
          "https://dentalemr.com/wp-content/uploads/2024/04/Server-w_Cloud.png",
      },
      {
        label: "Web-based",
        value: "Web-based",
        imageSrc:
          "https://dentalemr.com/wp-content/uploads/2024/04/Web-based.png",
      },
    ],
  },
  {
    question: "Do you know your current software costs?",
    choices: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
  },
  {
    question: "How reliable is your current software?",
    choices: [
      {
        label: "I'm constantly having issues",
        value: "I'm constantly having issues",
      },
      { label: "We're down once a month", value: "We're down once a month" },
      { label: "Could be better", value: "Could be better" },
      { label: "Never goes down", value: "Never goes down" },
    ],
  },
];
