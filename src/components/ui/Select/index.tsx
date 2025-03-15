import { IconArrow } from '@/components/icons';
import { UITexts } from '@/constants';
import { useDropdownToggle } from '@/hooks';
import { IOption } from '@/utils';

import { BtnMenuItem } from '../BtnMenuItem';
import { Dropdown } from '../Dropdown';
import { Label } from '../Label';
import { LabelText } from '../LabelText';
import { SelectArrowIcon, SelectButton, SelectContainer } from './styled';

interface ISelectProps {
  labelText: string;
  value: string;
  options: IOption[];
  onChange: (selectedOption: IOption) => void;
}

export const Select = ({ labelText, value, options, onChange }: ISelectProps) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();
  const selectedOption = options.find((option) => option.id === value);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setTimeout(() => setIsDropdownOpen(false), 0);

  const handleSelect = (option: IOption) => {
    onChange(option);
    closeDropdown();
  };

  console.log(selectedOption);

  return (
    <Label>
      <LabelText text={labelText} />
      <SelectContainer>
        <SelectButton type="button" onClick={toggleDropdown} ref={refDropdownBtn}>
          {selectedOption?.title || UITexts.LABELS.SELECT}
          <SelectArrowIcon $isRotate={isDropdownOpen}>
            <IconArrow />
          </SelectArrowIcon>
        </SelectButton>
        {isDropdownOpen && (
          <Dropdown isFullWidth={true} ref={refDropdownMenu}>
            {options.map((option) => (
              <BtnMenuItem key={option.id} onClick={handleSelect.bind(null, option)} text={option.title} />
            ))}
          </Dropdown>
        )}
      </SelectContainer>
    </Label>
  );
};
