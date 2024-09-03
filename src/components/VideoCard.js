const VideoCard = ({ video }) => {
  const { title, channelTitle, thumbnails } = video?.snippet;
  const { viewCount } = video?.statistics;
  return (
    <div className="tw-w-1/4 tw-mt-8">
      <div className="tw-mr-4">
        <img
          src={thumbnails.medium.url}
          alt={channelTitle}
          className="tw-w-full tw-rounded-xl"
        />
        <h6 className="tw-pt-2 tw-pr-3 tw-mb-1">{title}</h6>
        <span className="tw-text-gray-600">{channelTitle}</span>
        <div>
          <span className="tw-text-gray-600">
            {viewCount} views . 11 Months ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
