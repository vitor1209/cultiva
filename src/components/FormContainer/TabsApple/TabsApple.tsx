import type { SxProps, Theme } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses, type TabsProps } from "@mui/material/Tabs";
import * as styled from "./TabsApple.styled"

function toSx<ClassKey extends string>(
  styles: (theme: Theme) => Partial<Record<ClassKey, any>>,
  classes: Record<ClassKey, string>
) {
  return function sxCallback(theme: Theme) {
    let sx: any = {};
    Object.entries<any>(styles(theme)).forEach(([key, value]) => {
        const typedKey = key as ClassKey;
      if (key === "root") {
        sx = { ...sx, ...value };
      } else {
        sx[`& .${classes[typedKey]}`] = value;
      }
    });
    return sx;
  } as SxProps<Theme>;
}

export function TabsApple({ value, onChange, sx, tabs }: TabsProps & { tabs: string[] }) {
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
