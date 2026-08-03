-- Leaderboard eligibility (used / heavily upvoted) + comments on board entries

ALTER TABLE confession_bank
  ADD COLUMN IF NOT EXISTS used_count INTEGER NOT NULL DEFAULT 0;

CREATE INDEX IF NOT EXISTS confession_bank_leaderboard_idx
  ON confession_bank (score DESC, used_count DESC, ups DESC);

CREATE TABLE IF NOT EXISTS confession_comments (
  id TEXT PRIMARY KEY,
  confession_id TEXT NOT NULL REFERENCES confession_bank (id) ON DELETE CASCADE,
  voter_id TEXT NOT NULL,
  author_label TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS confession_comments_confession_idx
  ON confession_comments (confession_id, created_at ASC);
