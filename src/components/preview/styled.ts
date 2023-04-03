import styled from 'styled-components';

export const PreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PreviewContainer = styled.div`
  width: 100%;
  height: calc(100% - 72px);
  padding: 24px 0;
  overflow: auto;
`;

export const PreviewContent = styled.div`
  width: 100%;
  padding: 0 24px;
`;

export const PreviewSection = styled.div`
  display: flex;
`;

export const PreviewAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 16px;
`;

export const PreviewItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 16px;
  max-width: calc(100% - 48px);
  border-radius: 2px 8px 8px 8px;
`;

export const GenerationAnnounce = styled.div`
  padding-top: 8px;
  font-size: 12px;
  text-align: center;
  color: var(--textCommonTertiary);
`;

export const PreviewFooter = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-top: 1px solid var(--borderCommonDefault);
`;

export const RecordPagination = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginationIndex = styled.div`
  margin: 0 16px;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
`;