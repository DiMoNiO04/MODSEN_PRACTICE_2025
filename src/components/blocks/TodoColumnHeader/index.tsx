import { BtnRound } from '@/components/ui';
import { EColors } from '@/constants';
import { useDropdownToggle } from '@/hooks';
import { openModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { openModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch } from '@/store/store';
import { IColumn } from '@/utils/interfaces';

import { TitleWithCount } from '../TitleWithCount';
import { TodoColumnHeaderDropdown } from '../TodoColumnHeaderDropdown';
import { TodoColumnHeaderContainer } from './styled';

export interface ITodoColumnHeaderProps extends IColumn {
  isAddNewColumn?: boolean;
}

export const TodoColumnHeader = ({ id, title, color, cardIds, isAddNewColumn = false }: ITodoColumnHeaderProps) => {
  const { isDropdownOpen, setIsDropdownOpen, refDropdownBtn, refDropdownMenu } = useDropdownToggle();
  const dispatch = useAppDispatch();

  const buttonColor = isDropdownOpen ? EColors.DARK : EColors.WHITE;

  const handleAddButtonClick = () => {
    if (isAddNewColumn) {
      dispatch(openModaColumnAdd());
    } else {
      dispatch(openModalTaskAdd());
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <TodoColumnHeaderContainer color={color}>
      <TitleWithCount color={color} title={title} count={cardIds.length} />
      {isAddNewColumn ? (
        <BtnRound color={EColors.WHITE} handle={handleAddButtonClick} type="add" />
      ) : (
        <>
          <BtnRound ref={refDropdownBtn} color={buttonColor} handle={toggleDropdown} type="more" />
          {isDropdownOpen && <TodoColumnHeaderDropdown id={id} title={title} color={color} ref={refDropdownMenu} />}
        </>
      )}
    </TodoColumnHeaderContainer>
  );
};
