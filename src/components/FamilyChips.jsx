import "../styles/FamilyChips.css";

export default function FamilyChips(props) {
  const familyChips = props.family.map((member, i) => {
    const styles = {
      backgroundColor: member.backgroundColor,
      color: member.color,
    };
    return (
      <span key={i} style={styles}>
        {member.name}
      </span>
    );
  });

  return <section className="family-chips">{familyChips}</section>;
}
