import "../styles/FamilyChips.css";
import clsx from "clsx";

export default function FamilyChips(props) {
  const familyChips = props.family.map((member, i) => {
    const styles = {
      backgroundColor: member.backgroundColor,
      color: member.color,
    };
    return (
      <span
        key={i}
        style={styles}
        className={clsx({
          "opacity-50": props.isGameOver,
          "chip-dead": props.wrongGuessCount > i,
        })}
      >
        {member.name}
      </span>
    );
  });

  return <section className="family-chips">{familyChips}</section>;
}
