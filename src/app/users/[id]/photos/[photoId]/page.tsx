import React from "react";

interface PhotoDetailPageProps {
  params: {
    id: number;
    photoId: number;
  };
}

const PhotoDetailPage = async ({ params }: PhotoDetailPageProps) => {
  const { id, photoId } = await params;
  return (
    <div>
      PhotoDetailPage {id} {photoId}
    </div>
  );
};

export default PhotoDetailPage;
