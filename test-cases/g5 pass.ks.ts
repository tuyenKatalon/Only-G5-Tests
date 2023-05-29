import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://katalon-demo-cura.herokuapp.com");
  await web.click({
    type: "Web",
    id: "c7a3a30e-f3f6-47cb-a698-7cf187b5ff52",
    attributes: {
      id: "btn-make-appointment",
      href: "./profile.php#login",
      class: "btn btn-dark btn-lg",
    },
    childIndex: 4,
    hashes: { "md5.v1": "3caec008087ccb7a1cb3fc698fbf83c2" },
    name: "a - Make Appointment",
    selectors: [
      {
        id: "989e3723-1e72-42e6-ba79-cd42c488d727",
        type: "CSS",
        value: "#btn-make-appointment",
        isDefault: true,
      },
      {
        id: "6deed5ce-630c-4222-a15f-0b60062f980f",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "a",
    text: "Make Appointment",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.setText(
    {
      type: "Web",
      id: "7658f315-6b3d-4415-a917-b0d3218fd6aa",
      attributes: {
        type: "text",
        class: "form-control",
        id: "txt-username",
        name: "username",
        placeholder: "Username",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "57f176ba19cb19cc93acaba2dbde6b10" },
      name: "input - Username",
      selectors: [
        {
          id: "5bffdc4d-756b-4264-bb91-a7bbb2fd7617",
          type: "CSS",
          value: "#txt-username",
          isDefault: true,
        },
        {
          id: "1bb457a1-a411-4311-bc02-abdbd8b09e58",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "John Doe"
  );
  await web.setEncryptedText(
    {
      type: "Web",
      id: "9edac433-903b-46a2-8063-3cf3e6ec704c",
      attributes: {
        type: "password",
        class: "form-control",
        id: "txt-password",
        name: "password",
        placeholder: "Password",
        value: "",
        autocomplete: "off",
      },
      childIndex: 1,
      hashes: { "md5.v1": "fe634c654141065106a978262a410740" },
      name: "input - Password",
      selectors: [
        {
          id: "9f1f9923-3bc1-4215-b80a-61f1dfa3353b",
          type: "CSS",
          value: "#txt-password",
          isDefault: true,
        },
        {
          id: "1c09bf42-4cb3-4e3f-9eaa-1c2074eefcb6",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
      parentIframe: null,
      shadowRoot: null,
    },
    "f637b579b5cb3c12d648ae731f8b108a-U2FsdGVkX1/gudo7HEpNcs5l5TiXOF7GNAIL1BCiKBM6gP+5bopO0wFJ9kKEz85k"
  );
  await web.click({
    type: "Web",
    id: "3bcfe7ac-0171-43eb-a898-b02af37d29bd",
    attributes: { id: "btn-login", type: "submit", class: "btn btn-default" },
    childIndex: 1,
    hashes: { "md5.v1": "50aa64147a00037c420def1e18673ac9" },
    name: "button - Login",
    selectors: [
      {
        id: "d5ef6644-0f8c-49fa-bc11-8741510bd69e",
        type: "CSS",
        value: "#btn-login",
        isDefault: true,
      },
      {
        id: "fd50a1d1-11ae-43a0-836b-f64a75d52a19",
        type: "Attribute",
        value: null,
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "Login",
    pageUrl: "https://katalon-demo-cura.herokuapp.com/profile.php#login",
    parentIframe: null,
    shadowRoot: null,
  });
  await web.verifyElementText(
    {
      type: "Web",
      id: "b33ad19c-d008-4019-8485-de297f9a51b4",
      attributes: {
        id: "btn-book-appointment",
        type: "submit",
        class: "btn btn-default",
      },
      childIndex: 1,
      hashes: { "md5.v1": "56ef00cb92ad0547b9464c968fd02681" },
      name: "button - Book Appointment",
      selectors: [
        {
          id: "48cc65b3-cd74-4ad6-b1bb-4efd27d62fa4",
          type: "CSS",
          value: "#btn-book-appointment",
          isDefault: true,
        },
        {
          id: "d740809e-e889-4e0e-8058-2567bc238083",
          type: "Attribute",
          value: null,
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "button",
      text: "Book Appointment",
      pageUrl: "https://katalon-demo-cura.herokuapp.com/#appointment",
      parentIframe: null,
      shadowRoot: null,
    },
    "Book Appointment"
  );
});