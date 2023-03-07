import axios from 'axios';
import { useQueries } from 'react-query';

const serverEndPoints = [
    '동아리소개',
    '동아리비전',
    '동아리교수'
];

// 동아리에 관한 정보를 데이터베이스에서 불러오는 커스텀 훅
const useClubInfo = () => {
    
    // react-query의 useQuerys는 각각 3개의 쿼리들을 한번에 묶어 호출하여 효율적인 네트워크 통신을 도와준다.
    const queries = serverEndPoints.map((point) => ({
        queryKey: ['clubInfo', point],                                       
        queryFn: () => axios.get(`/info/getInfoOne/${point}`),
    }));

    const res = useQueries(queries);

    // 각 쿼리의 응답에 대한 많은 정보가 배열로 담긴다. 그중 데이터, 로딩중, 에러여부, 에러만 리턴한다
    return res.map(({ data, isLoading, isError, error }) => ({ data, isLoading, isError, error }));
};

export default useClubInfo;