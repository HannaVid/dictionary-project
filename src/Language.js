export default function Language(props) {
  if (props.language.includes("-au.mp3")) return "🇦🇺";
  else if (props.language.includes("-us.mp3")) return "🇺🇸";
  else if (props.language.includes("-uk.mp3")) return "🇬🇧";
  else return null;
}
