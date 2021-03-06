import React from 'react';
import clsx from 'clsx';

const MentionLink = ({ mention, children, className }) => (
  <a
    href={mention.link}
    className={className}
    spellCheck={false}
    data-testid="mentionLink"
  >
    {children}
  </a>
);

const MentionText = ({ children, className }) => (
  <span className={className} spellCheck={false} data-testid="mentionText">
    {children}
  </span>
);

const Mention = props => {
  const {
    entityKey,
    theme = {},
    mentionComponent,
    children,
    decoratedText,
    className,
    contentState,
  } = props;

  const combinedClassName = clsx(theme.mention, className);
  const mention = contentState.getEntity(entityKey).getData().mention;

  const Component =
    mentionComponent || (mention.link ? MentionLink : MentionText);

  return (
    <Component
      entityKey={entityKey}
      mention={mention}
      theme={theme}
      className={combinedClassName}
      decoratedText={decoratedText}
    >
      {children}
    </Component>
  );
};

export default Mention;
