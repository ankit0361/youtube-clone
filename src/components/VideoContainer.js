import { useEffect } from "react";
import MOCK_DATA from "../utils/videoData.json";
import { useDispatch, useSelector } from "react-redux";
import { addVideoList } from "../utils/videoSlice";
import VideoCard from "./VideoCard";

const VideoConatiner = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);
  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = () => {
    dispatch(addVideoList(MOCK_DATA.items));
  };

  return (
    <div className="tw-flex tw-flex-wrap">
      {videoList.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoConatiner;
