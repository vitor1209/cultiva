import type { Theme } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses, type TabsProps } from "@mui/material/Tabs";
import * as styled from "./TabsApple.styled";

function toSx<ClassKey extends string>(
  styles: (theme: Theme) => Partial<Record<ClassKey, unknown>>,
  classes: Record<ClassKey, string>
) {
  return (theme: Theme) => {
    const sx: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(styles(theme)) as [ClassKey, unknown][]) {
      if (value == null) continue;

      if (key === "root") {
        Object.assign(sx, value);
      } else {
        sx[`& .${classes[key]}`] = value;
      }
    }
    return sx;
  };
}

export function TabsApple({
  value,
  onChange,
  sx,
  tabs,
}: TabsProps & { tabs: string[] }) {
  const tabItemSx = toSx(styled.tabItemStyles, tabClasses);

  return (
    <Tabs
      value={value}
      onChange={onChange}
      sx={[toSx(styled.tabsStyles, tabsClasses), ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {tabs.map((label, index) => (
        <Tab key={index} disableRipple label={label} sx={tabItemSx} />
      ))}
    </Tabs>
  );
}
