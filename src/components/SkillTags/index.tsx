import { useTheme } from 'react-jss';

import { Skill } from 'types/contacts.type';
import useStyles from './SkillTags.styles';

const SkillTags = ({
  skills,
}: {
  skills: Skill[],
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.skillWrapper}>
      {skills.map((skill) => (
        <span className={classes.skill} key={skill.id}>
          {skill.type}
        </span>
      ))}
    </div>
  );
};

export default SkillTags;
