export default function Language(props) {
  if (props.language.includes("-au.mp3")) return "π¦πΊ";
  else if (props.language.includes("-us.mp3")) return "πΊπΈ";
  else if (props.language.includes("-uk.mp3")) return "π¬π§";
  else if (props.language.includes("-ca.mp3")) return "π¨π¦";
  else return null;
}
