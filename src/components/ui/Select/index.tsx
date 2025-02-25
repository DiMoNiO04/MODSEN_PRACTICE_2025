import { IconArrow } from '@/components/icons';
import { useDropdownToggle } from '@/hooks';
import { IOption } from '@/utils';

import { BtnMenuItem } from '../BtnMenuItem';
import { Dropdown } from '../Dropdown';
import { Label } from '../Label';
import { LabelText } from '../LabelText';
import { SelectArrowIcon, SelectButton, SelectContainer } from './styled';

interface ISelectProps {
  labelText: string;
  value: IOption;
  options: IOption[];
  onChange: (selectedOption: IOption) => void;
}

export const Select = ({ labelText, options, value, onChange }: ISelectProps) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();
  const selectedOption = options.find((option) => option.value === value.value);

  const handleSelect = (option: { color: string; value: string }) => {
    onChange(option);
    setTimeout(() => setIsDropdownOpen(false), 0);
  };

  return (
    <Label>
      <LabelText text={labelText} />
      <SelectContainer>
        <SelectButton type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} ref={refDropdownBtn}>
          {selectedOption?.value || 'Select'}
          <SelectArrowIcon $isRotate={isDropdownOpen}>
            <IconArrow />
          </SelectArrowIcon>
        </SelectButton>
        {isDropdownOpen && (
          <Dropdown isFullWidth={true} ref={refDropdownMenu}>
            {options.map((option) => (
              <BtnMenuItem key={option.value} onClick={() => handleSelect(option)} text={option.value} />
            ))}
          </Dropdown>
        )}
      </SelectContainer>
    </Label>
  );
};
