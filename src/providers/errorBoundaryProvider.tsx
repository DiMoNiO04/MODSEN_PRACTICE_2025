import { Component, ErrorInfo, ReactNode } from 'react';

import { UITexts } from '@/constants';

import { ErrorContent } from '../components/blocks';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundaryProvider extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): IErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.logErrorToMyService(error, errorInfo);
  }

  logErrorToMyService(error: Error, errorInfo: ErrorInfo): void {
    console.error(UITexts.ERRORS.LOGGED_ERROR, error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorContent text={UITexts.ERRORS.GENERAL} />;
    }

    return children;
  }
}
