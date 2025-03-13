import { BtnRound } from '@/components/ui';
import { EColors } from '@/constants';
import { useDropdownToggle } from '@/hooks';
import { openModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';
import { IOption } from '@/utils';

import { TitleWithCount } from '../TitleWithCount';
import { TodoColumnHeaderDropdown } from '../TodoColumnHeaderDropdown';
import { TodoColumnHeaderContainer } from './styled';

export interface ITodoColumnHeaderProps {
  status: IOption;
  count: number;
  isAddNewColumn?: boolean;
}

export const TodoColumnHeader = ({ status, count, isAddNewColumn = false }: ITodoColumnHeaderProps) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();
  const dispatch = useAppDispatch();

  const buttonColor = isDropdownOpen ? EColors.DARK : EColors.WHITE;

  const handleAddButtonClick = () => {
    if (isAddNewColumn) {
      dispatch(openModaColumnAdd());
    } else {
      dispatch(openModalTaskAdd({ status }));
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <TodoColumnHeaderContainer color={status.color}>
      <TitleWithCount color={status.color} title={status.value} count={count} />
      {isAddNewColumn ? (
        <BtnRound color={EColors.WHITE} handle={handleAddButtonClick} type="add" />
      ) : (
        <>
          <BtnRound ref={refDropdownBtn} color={buttonColor} handle={toggleDropdown} type="more" />
          {isDropdownOpen && (
            <TodoColumnHeaderDropdown ref={refDropdownMenu} name={status.value} color={status.color} />
          )}
        </>
      )}
    </TodoColumnHeaderContainer>
  );
};
