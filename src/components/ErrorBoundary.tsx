import { Component, ErrorInfo, ReactNode } from 'react';

import { UITexts } from '@/constants';

import { ErrorContent } from './blocks';

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
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
    console.error('Logged Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorContent text={UITexts.ERRORS.GENERAL} />;
    }

    return this.props.children;
  }
}
