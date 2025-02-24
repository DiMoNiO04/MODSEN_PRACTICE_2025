import { useState } from 'react';
import { Label } from '../Label';
import { LabelText } from '../LabelText';
import { SelectContainer, SelectButton, SelectArrowIcon } from './styled';
import { BtnMenuItem } from '../BtnMenuItem';
import { Dropdown } from '../Dropdown';
import { IconArrow } from '@/components/icons';
import { useDropdownToggle } from '@/hooks';

interface ISelectProps {
  labelText: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const Select = ({ labelText, options, value, onChange }: ISelectProps) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();
  const [selected, setSelected] = useState<string>(value);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setTimeout(() => setIsDropdownOpen(false), 0);
  };

  const handleClickBtnOpen = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <Label>
      <LabelText text={labelText} />
      <SelectContainer>
        <SelectButton type="button" onClick={handleClickBtnOpen} ref={refDropdownBtn}>
          {selected}
          <SelectArrowIcon isRotate={isDropdownOpen}>
            <IconArrow />
          </SelectArrowIcon>
        </SelectButton>
        {isDropdownOpen && (
          <Dropdown isFullWidth={true} ref={refDropdownMenu}>
            {options.map((option) => (
              <BtnMenuItem key={option.value} onClick={() => handleSelect(option.value)} text={option.label} />
            ))}
          </Dropdown>
        )}
      </SelectContainer>
    </Label>
  );
};
