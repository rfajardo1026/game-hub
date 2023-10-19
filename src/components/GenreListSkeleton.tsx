import { HStack, Skeleton, SkeletonCircle } from "@chakra-ui/react";

export default function GenreListSkeleton() {
  return (
    <HStack padding={2}>
      <SkeletonCircle size="10" />
      <Skeleton height="20px" />
    </HStack>
  );
}
