import { AvatarGroup, AvatarGroupProps } from "@mantine/core";

type Props = AvatarGroupProps;

export const FTAvatarGroup = ({ children, ...props }: Props) => (
  <AvatarGroup {...props}>{children}</AvatarGroup>
);
