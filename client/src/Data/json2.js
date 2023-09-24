export const question2 = [
  {
    elements: [
      {
        name: "name",
        type: "text",
        title: "Nombre",
        maxLength: 70
      },
      {
        name: "email",
        type: "text",
        title: "E-mail address",
        inputType: "email",
        placeholder: "foobar@example.com",
        isRequired: true,
        autocomplete: "email"
      },
      {
        name: "company",
        type: "text",
        title: "Empresa",
        maxLength: 30
      },
      {
        name: "position",
        type: "text",
        title: "Cargo",
        maxLength: 30
      },
      {
        name: "linkedin",
        type: "text",
        title: "Linkedin",
        inputType: "url",
        placeholder: "https://www.example.com",
        validators: [
          {
            type: "regex",
            regex: "https://.*",
            text: "Your answer must match the URL pattern."
          }
        ]
      }
    ],
    showQuestionNumbers: false
  }
];