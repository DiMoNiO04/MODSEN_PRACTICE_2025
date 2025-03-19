import { UITexts } from '@/constants';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

interface IUseValidationReturn {
  isEmptyField: (value: string) => boolean;
  isDuplicateColumn: (value: string, id?: string) => boolean;
}

export const useValidation = (): IUseValidationReturn => {
  const dispatch = useAppDispatch();
  const { kanbanData } = useAppSelector(({ kanbanBoard }) => kanbanBoard);

  const isEmptyField = (value: string): boolean => {
    if (value.trim() === '') {
      dispatch(openNotification({ isSuccess: false, text: UITexts.NOTIFICATION.ERROR_REQUIRED_FILEDS }));
      return true;
    }
    return false;
  };

  const isDuplicateColumn = (value: string, id?: string): boolean => {
    const trimmedTitle = value.trim().toLowerCase();
    let currentTitle = '';

    if (id && kanbanData.columns[id]) {
      currentTitle = kanbanData.columns[id].title.trim().toLowerCase();
    }

    const isDuplicate = Object.values(kanbanData.columns).some(
      (column) =>
        column.title.trim().toLowerCase() === trimmedTitle && column.title.trim().toLowerCase() !== currentTitle
    );

    if (isDuplicate) {
      dispatch(
        openNotification({
          isSuccess: false,
          text: UITexts.NOTIFICATION.ERROR_DUPLICATED_COLUMN,
        })
      );
    }

    return isDuplicate;
  };

  return { isEmptyField, isDuplicateColumn };
};
