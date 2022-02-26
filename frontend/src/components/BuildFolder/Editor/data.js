export const colourOptions = [
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" }
];

export const flavourOptions = [
  { value: "vanilla", label: "Vanilla", rating: "safe" },
  { value: "chocolate", label: "Chocolate", rating: "good" },
  { value: "strawberry", label: "Strawberry", rating: "wild" },
  { value: "salted-caramel", label: "Salted Caramel", rating: "crazy" }
];


export const optionLength = [
  { value: 1, label: "general" },
  {
    value: 2,
    label:
      "Evil is the moment when I lack the strength to be true to the Good that compels me."
  },
  {
    value: 3,
    label:
      "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you."
  }
];

export const TextSize = [
  { id: 1, label: "Normal Text" },
  { id: 2, label: "Title" },
  { id: 3, label: "Headline" },
  { id: 4, label: "Subheadline" },
  { id: 5, label: "Small Text" },
];

export const TextFonts = [
  { id: 1, label: "Helvetica" },
  { id: 2, label: "Times New Roman" },
  { id: 3, label: "Futura" },
  { id: 4, label: "Helvetica" },
  { id: 5, label: "Garamond" },
  { id: 6, label: "Cambria" },
  { id: 7, label: "Verdana" },
];

// let bigOptions = [];
// for (let i = 0; i < 10000; i++) {
// 	bigOptions = bigOptions.concat(colourOptions);
// }

export const groupedOptions = [
  {
    label: "Colours",
    options: colourOptions
  },
  {
    label: "Flavours",
    options: flavourOptions
  }
];
