import { useQuery, useMutation, useQueryClient } from 'react-query';
import { privateInstance } from '../../library/apis/axiosInstance';

export const useCreatePlaylist = () => {
  const createPlaylist = (data) => {
    const response = privateInstance.post('/playlist/create/', data);
    return response;
  };

  const mutation = useMutation(createPlaylist);

  return mutation;
};

export const useGetPlaylistDetail = (id) => {
  const { data, isLoading, isError } = useQuery(
    'get-playlist-detail',
    () => {
      return privateInstance.get(`/playlist/detail/${id}/`);
    },
    {
      select: (response) => response.data,
    },
  );
  return { data, isLoading, isError };
};

export const useGetPlaylistMusic = (ids) => {
  const { data, isLoading } = useQuery(
    'get-playlist-music',
    () => {
      return privateInstance.get(`/playlist/music/`);
    },
    {
      select: (response) => {
        const data = response.data.music.filter((item) =>
          ids.includes(item.id),
        );
        return data;
      },
    },
  );
  return { data, isLoading };
};

export const useLikePlaylist = () => {
  const queryClient = useQueryClient();

  const likePlaylist = (data) => {
    const response = privateInstance.post('/playlist/like/', data);
    return response;
  };

  return useMutation((data) => likePlaylist(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('get-playlist-detail');
    },
  });
};

export const useDeletePlaylist = () => {
  const deletePlaylist = async (id) => {
    const response = await privateInstance.delete(`/playlist/delete/${id}`);
    return response;
  };

  return useMutation(deletePlaylist);
};
