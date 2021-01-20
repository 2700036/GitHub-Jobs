import { RouteComponentProps } from 'react-router';

interface MatchParams {
  jobID: string;
}

export interface Props extends RouteComponentProps<MatchParams> {

}